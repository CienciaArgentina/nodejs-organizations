import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { HTTPClientError } from './HTTPClientError';

export class HTTPApiCallError extends HTTPClientError {
  readonly statusCode!: number;
  readonly errorRequest?: AxiosError;
  constructor(
    message: object | string = 'api.call.commons.error',
    statusCode: number,
    code: string,
    error?: AxiosError
  ) {
    super(message, code);
    this.errorRequest = error;
    this.statusCode = statusCode;
  }
}

const handleResponse = <T>({ data }: AxiosResponse): T => data;

const handleError = (error: AxiosError): Promise<void> => {
  if (error.response && error.response.status)
    throw new HTTPApiCallError(error.response.data.message, error.response.status, error.response.data.code, error);

  return Promise.reject(error);
};

const initializeResponseInterceptor = (instance: AxiosInstance): void => {
  instance.interceptors.response.use(handleResponse, handleError);
};

export const httpClient = (url: string, handleResponse = true): AxiosInstance => {
  const instance = axios.create({
    baseURL: url,
  });
  if (handleResponse) initializeResponseInterceptor(instance);
  return instance;
};