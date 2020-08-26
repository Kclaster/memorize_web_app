// External Dependencies
import { AxiosResponse } from 'axios';

// Internal Dependencies
import { postRequest } from '../api';

// Local Typings
export interface CreateAuthUserPayload {
  matchingPassword: string;
  password: string;
  roleId: number;
  username: string;
}
export interface LoginRequestPayload {
  password: string;
  username: string;
}

type LoginRequest = (payload: LoginRequestPayload) => AxiosResponse;
type CreateAuthUserRequest = (payload: CreateAuthUserPayload) => AxiosResponse;

// Local Variables
const basePath = 'api/v1/auth';

// Exports
export const login: LoginRequest = data => {
  const endpoint = `${basePath}/authenticate`;

  return postRequest({
    data,
    endpoint,
  });
};

export const logout = () => {
  const endpoint = `${basePath}/logout`;

  return postRequest({ endpoint });
};

export const createAuthUser: CreateAuthUserRequest = data => {
  const endpoint = `${basePath}/register`;

  return postRequest({
    data,
    endpoint,
  });
};