import axios, { AxiosRequestConfig } from "axios";

axios.defaults.timeout = 1000 * 10;

interface AxiosErrorInterface {
  message: string;
  config: any;
  response: any;
}

axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: AxiosErrorInterface) => {
    return error;
  }
);

axios.interceptors.response.use(
  (response: any) => {
    if (response.status !== 200) {
      // eslint-disable-next-line no-console
      response.data.message && console.log(response.data.message);
      return Promise.reject(response);
    }
    return Promise.resolve(response.data.data);
  },
  (error: AxiosErrorInterface) => {
    if (~`${error.message}`.indexOf("timeout")) {
      // 自行替换提示
      // eslint-disable-next-line no-console
      console.log("网络超时");
    }
    if (error.response && error.response.data.message) {
      // 自行替换提示
      // eslint-disable-next-line no-console
      console.log(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

const request = (url: string, config?: AxiosRequestConfig): Promise<any> => {
  const _config = {
    url: `${import.meta.env.VITE_BASE_API}${url}`,
    ...config,
  };
  return axios.request(_config);
};

export default request;
