/* eslint-disable max-len */
// External Dependencies
import { AxiosResponse } from 'axios';
import { ActionCreatorWithPayload, ActionCreatorWithoutPayload, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';

// Local Typings
interface APIRequestWithPayload<RequestPayload, ResponseType> {
  (payload: RequestPayload): AxiosResponse<ResponseType>;
}
interface APIRequestWithoutPayload<ResponseType> {
  (): AxiosResponse<ResponseType>
}
type WatcherMethod = 'takeEvery' | 'takeLatest' | 'takeLeading';
interface CreateSagaProps<RequestPayload, ResponseType, ErrorType> {
  apiRequest: APIRequestWithPayload<RequestPayload, ResponseType> | APIRequestWithoutPayload<ResponseType>;
  errorAction: ActionCreatorWithPayload<ErrorType, string>;
  onError?: (error: ErrorType) => void;
  onSuccess?: (response: ResponseType) => void;
  requestAction: ActionCreatorWithPayload<RequestPayload, string> | ActionCreatorWithoutPayload<string>;
  successAction: ActionCreatorWithPayload<ResponseType, string>;
  watcherMethod?: WatcherMethod;
}

/**
 * A function that accepts an API request function and Redux actions, and 
 * generates a Redux Saga and that Saga's watcher.
 * 
 * Available params:
 * - `apiRequest` (required): API function to be called. Arguments can be passed to this methdod through the `requestAction`
 * - `errorAction` (requred): Redux action that runs if API request fails. Returns the `Error` in the action's payload
 * - `onError` (optional): Method for custom error handling. Called with `Error` after `errorAction`
 * - `onSuccess` (optional): Method for custom success handling. Called with API response after `successAction`
 * - `requestAction` (required): Redux action to start the saga. Options for the API request can be passed in here
 * - `successAction` (required): Redux action that runs if the API request succeeds. Returns the API reponse in the action's payload
 * - `watcherMethod` (optional): Passing `watcherMethod: 'takeEvery'` will switch the watcher to use `takeEvery`, `watcherMethod: 'takeLeading'` will switch the watcher to use `takeLeading`. Defaults to `takeLatest`.
 * 
 * ### Explanation
 * By default, the generated saga has the following structure:
 * 
 *      function* saga(action) {
          try {
            const response = yield call(apiRequest, action.payload);
            yield put(successAction(response.data));
            if (onSuccess) {
              yield onSuccess(response.data);
            }
          } catch (error) {
            yield put(errorAction(error.data));
            if (onError) {
              yield onError(error.data);
            }
          }
        }
 * 
 *  The generated watcher looks like this:
 * 
 *      function* watcher() {
            yield takeLatest(requestAction.type, saga);
        }
 *       
 * 
 * ### Example
 * 
 *      const getTodosSaga = createSaga({
          apiRequest: fetchTodos,
          errorAction: GET_TODOS_ERROR,
          requestAction: GET_TODOS_REQUEST,
          successAction: GET_TODOS_SUCCESS,
        });

        export default getTodosSaga.watcher;

 *  You can also export the `saga` for custom use, like a custom watcher:
 *   
        const { saga } = getTodosSaga;

        function* customTodosWatcher() {
          yield takeEvery([
            'FETCH_TODOS',
            'CREATE_TODOS_SUCCESS',
            'UPDATE_TODOS_SUCCESS',
            'DELETE_TODOS_SUCCESS',
          ], saga);
        }
 *       
 */
export function createSaga<RequestPayload, ResponseType, ErrorType>({
  apiRequest,
  errorAction,
  onError,
  onSuccess,
  requestAction,
  successAction,
  watcherMethod,
}: CreateSagaProps<RequestPayload, ResponseType, ErrorType>) {
  function* saga(action: PayloadAction<RequestPayload>) {
    try {
      const response: ReturnType<typeof apiRequest> = yield call(apiRequest, action.payload);
      yield put(successAction(response.data));
      if (onSuccess) {
        yield call(onSuccess, response.data);
      }
    } catch (error) {
      yield put(errorAction(error.data));
      if (onError) {
        yield call(onError, error.data);
      }
    }
  }

  function* watcher() {
    if (watcherMethod === 'takeEvery') {
      yield takeEvery(requestAction.type, saga);
    } else if (watcherMethod === 'takeLeading') {
      yield takeLeading(requestAction.type, saga);
    } else {
      yield takeLatest(requestAction.type, saga);
    }
  }

  return {
    saga,
    watcher,
  };
}
