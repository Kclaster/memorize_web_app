// External Dependencies
import { createSelector } from '@reduxjs/toolkit';

// Internal Dependencies
import { RootState } from '../../redux/reducers';
import { AuthState } from '../../redux/reducers/auth';
import { nowInSeconds } from '../../utils/dates';

// Local Variables
const authState = (state: RootState) => state.auth;

const hasLoaded = (state: AuthState) => state.hasLoaded;
const isLoading = (state: AuthState) => state.isLoading;
const token = (state: AuthState) => state.token;
const operatorId = (state: AuthState) => state.tokenData?.operatorId || '';
const roleId = (state: AuthState) => state.tokenData?.roleId || '';
const tokenExpiration = (state: AuthState) =>
  state.tokenData ? state.tokenData.exp < nowInSeconds() : true;

// Exports
export const selectAuthHasLoaded = createSelector(authState, hasLoaded);
export const selectAuthIsLoading = createSelector(authState, isLoading);
export const selectAuthToken = createSelector(authState, token);
export const selectAuthOperatorId = createSelector(authState, operatorId);
export const selectAuthRoleId = createSelector(authState, roleId);
export const selectAuthIsTokenExpired = createSelector(authState, tokenExpiration);
