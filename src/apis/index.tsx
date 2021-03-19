import { createContext, useContext } from 'react';
import { useHistory } from 'react-router';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { message } from 'antd';

import { baseURL } from '@/config';
import { dataUserGet } from '@data/dataUser';

export type ApisFunction<P, D> = (request: AxiosInstance) => (props: P) => Promise<ApisResult<D>>;
export type ApisResult<D = any> = [
  result?: {
    data: D;
    msg: string;
    status: number;
  },
  response?: AxiosResponse,
];

const ApisContext = createContext<AxiosInstance | undefined>(undefined);
const successResponse = (response: AxiosResponse): ApisResult => [response.data, response];
const errorResponse = (response: AxiosResponse): ApisResult => [undefined, response];
const request = axios.create({ baseURL: baseURL });

export const ApisProvider = (props: { children: React.ReactNode }) => {
  const history = useHistory();
  request.interceptors.request.use((request) => {
    request.headers['xxx'] = dataUserGet().token || '';

    return request;
  });
  request.interceptors.response.use(
    (response): any => {
      if (response.data && typeof response.data.status === 'number')
        switch (response.data.status) {
          case 0:
            return successResponse(response);
          case 1:
          case 2:
            message.error(response.data.msg || '请求错误');
            break;
          case 10:
            window.localStorage.clear();
            message.error('请重新登录喵QwQ');
            setTimeout(() => {
              history.replace('/auth/login');
            });
            break;
          case 20:
            message.error('服务器出错了喵xwx');
            break;
          default:
            message.error('未知错误QWQ');
        }

      return errorResponse(response);
    },
    (error) => {
      if (error.response)
        switch (error.response.status) {
          case 401:
            message.error('这个这个是不能看的');
            break;
          case 403:
            message.error('前方施工禁止通行喵');
            break;
          case 404:
            message.error('请求找不到惹');
            break;
          default:
            message.error('请求错误QwQ');
            break;
        }
      else message.error('网络找不到家了QAQ');

      return errorResponse(error);
    },
  );

  return <ApisContext.Provider value={request}>{props.children}</ApisContext.Provider>;
};

export function useApis() {
  const request = useContext(ApisContext);
  if (!request) throw new Error('[useApis] ApisContext 尚未初始化');

  return function <P, D>(apisFunction: ApisFunction<P, D>) {
    return apisFunction(request);
  };
}
