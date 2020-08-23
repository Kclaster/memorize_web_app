// External Dependencies
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

// Internal Dependencies
import { LOGIN_SUCCESS } from '../redux/reducers/auth';
import store from '../redux/store';
import { QueryParams } from '../typings/api';
import HttpStatusCode from '../typings/api/httpStatusCodes';
import { stringifyQueryParams } from '../utils/string';

// Local Typings
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type APIRequest = (payload: RequestPayload) => any;
interface RequestPayload extends AxiosRequestConfig {
  endpoint: string;
  queryParams?: QueryParams;
}

// Local Variables
const isDev: boolean = process.env.NODE_ENV === 'development';

const sendRequest: APIRequest = async ({
  data,
  endpoint,
  method,
  queryParams = null,
}) => {
  const token = store.getState().auth.token;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = token;
  const queryString = queryParams ? `?${stringifyQueryParams(queryParams)}` : '';
  const url = `http://coordinate-core.herokuapp.com/${endpoint}${queryString}`;
  const localUrl = `http://localhost:8080/${endpoint}${queryString}`;

  try {
    const response: AxiosResponse = await axios({
      data,
      method,
      url: false ? url : localUrl,
    });
    // eslint-disable-next-line no-console
    console.log(`${method} Request: ${endpoint}`);

    if (response.headers.authorization) {
      store.dispatch(LOGIN_SUCCESS(response.headers.authorization));
    }

    return response;
  } catch (error) {
    if (isDev) {
      if (error.response) {
        // eslint-disable-next-line no-console
        console.error({ error: error.response });
      } else {
        // eslint-disable-next-line no-console
        console.log({ error });
      }
    }

    const isAuthenticated = error.response?.status !== HttpStatusCode.UNAUTHORIZED;

    if (!isAuthenticated) {
      // TODO: add logout
    } else {
      throw (error.response);
    }
  }
};

export const postRequest: APIRequest = ({
  data,
  endpoint,
  queryParams,
}) => {
  const method: Method = 'POST';

  return sendRequest({
    data,
    endpoint,
    method,
    queryParams,
  });
};

export const putRequest: APIRequest = ({
  data,
  endpoint,
  queryParams,
}) => {
  const method: Method = 'PUT';

  return sendRequest({
    data,
    endpoint,
    method,
    queryParams,
  });
};

export const getRequest: APIRequest = ({
  data,
  endpoint,
  queryParams = {},
}) => {
  const method: Method = 'GET';

  return sendRequest({
    data,
    endpoint,
    method,
    queryParams,
  });
};

export const deleteRequest: APIRequest = ({
  data,
  endpoint,
  queryParams,
}) => {
  const method: Method = 'DELETE';

  return sendRequest({
    data,
    endpoint,
    method,
    queryParams,
  });
};
