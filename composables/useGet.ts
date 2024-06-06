import { useRequest } from "./useRequest";
export const useGet = async (url: string, params: object, options?: object) => {
  const defaultOptions = {
    method: "GET",
    params: params,
  };
  const newOptions: object = { ...defaultOptions, ...options };


  return useRequest(url, newOptions);
};
