// External Dependencies
import { all, fork } from 'redux-saga/effects';

// Internal Dependencies
import watchLogin from './loginSaga';

export default function* () {
  yield all([
    fork(watchLogin),
  ]);
}
