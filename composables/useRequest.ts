type Response = {
  url: string;
  body: any,
  status: number;
  type: string,
  statusText?: string;
  _data?: any;
  headers?: object,
  ok?: boolean,
  redirected?: boolean,
  bodyUsed?: boolean,
};
type ResponseData = {
  code: number,
  msg: string,
  data: object | object[]
}


export const useRequest = async (url: string, options: object) => {

  
  const router = useRouter();
  const store = useUserStore();
  const appConfig = useAppConfig();
  // const host = window.location.hostname;
  let headers = {
    // Authorization:'Bearer '+store.user?.token,
    token: store.userInfo?.token || null,
    appsn: 'mingzhi'

  };
  // if(process.client){
  //   headers.token=store.userInfo?.token
  // }
  
  const defaultOptions: object = {
    baseURL: appConfig.app.apiUrl,
    headers: headers,
    onResponse({ response }: { response: Response }) {
      const res = response._data;
      if (res.code == 0) {
        ElMessage.error(res.msg);
      }
    },
    onResponseError({ response }: { response: Response }) {
      const res = response._data;
      if (response.status == 401) {
        store.logout()
      }
    },
  };
  const newOptions: object = { ...defaultOptions, ...options };
  const { data, pending, refresh } = await useFetch(url, newOptions);
  if (data.value.code == 0) {
    return Promise.reject()
  }
  return { data, refresh, pending };


};
