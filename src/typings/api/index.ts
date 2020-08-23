// External Dependencies
import { AxiosResponse } from 'axios';

// Internal Dependencies
import HttpStatusCode from './httpStatusCodes';

export interface APIError {
  timestamp: string;
  status: HttpStatusCode;
  error: string;
  message: string;
  path: string;
}
export type APIErrorResponse = AxiosResponse<APIError>['data'];

export interface QueryParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any
  page?: number;
  pageSize?: number;
  statusId?: number;
  query?: string;
  sortField?: string;
  isAscending?: boolean;
}