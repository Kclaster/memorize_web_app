// External Dependencies
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Internal Dependencies
import { LoginRequestPayload } from '../../../api/auth';
import {
  DefaultState,
  defaultState,
} from '../../../constants/redux/initialState';
import { APIErrorResponse } from '../../../typings/api';
import {
  ParsedToken,
  parseJWT,
} from '../../../utils/string';

// Local Typings
export interface AuthState extends DefaultState {
  token: string;
  tokenData: ParsedToken | null;
  tokenExp: number;
}

export interface Token {
  token: string;
}

// Local Variables
const initialState: AuthState = {
  ...defaultState,
  token: '',
  tokenData: null,
  tokenExp: 0,
};

const applyToken = ({
  state,
  token,
}: {
  state: AuthState,
  token?: string;
}): AuthState => {
  if (!token) {
    return state;
  }

  const parsedToken = token ? parseJWT(token) : null;
  const tokenExp = parsedToken ? Math.floor(parsedToken.exp) : 0;

  return {
    ...state,
    tokenData: parsedToken || state.tokenData,
    tokenExp: tokenExp || state.tokenExp,
  };
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    LOGIN_ERROR(state, action: PayloadAction<APIErrorResponse>) {
      state.error = action.payload;
      state.isLoading = false;
      state.hasLoaded = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    LOGIN_REQUEST(state, action: PayloadAction<LoginRequestPayload>) {
      state.error = null;
      state.hasLoaded = false;
      state.isLoading = true;
    },
    LOGIN_SUCCESS(state, action: PayloadAction<string>) {
      const { tokenExp, tokenData } = applyToken({
        state,
        token: action.payload,
      });

      state.tokenData = tokenData;
      state.tokenExp = tokenExp;
      state.hasLoaded = true;
      state.isLoading = false;
      state.token = action.payload;
    },
    LOGOUT(state) {
      state.error = initialState.error;
      state.hasLoaded = initialState.hasLoaded;
      state.isLoading = initialState.isLoading;
      state.tokenData = initialState.tokenData;
      state.tokenExp = initialState.tokenExp;
    },
  },
});

// Exports
export const {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} = authSlice.actions;

export default authSlice.reducer;