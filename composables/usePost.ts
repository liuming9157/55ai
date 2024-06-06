import { useRequest } from "./useRequest";
export const usePost = async (url: string, body?: object, options?: object) => {
  const defaultOptions = {
    method: "POST",
    body: body,
  };
  const newOptions: object = { ...defaultOptions, ...options };


  return useRequest(url, newOptions);
};
