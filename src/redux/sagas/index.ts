// External Dependencies
import { all, call, spawn } from 'redux-saga/effects';

// Internal Dependencies
import watchAuth from './auth';

export function* rootSaga() {
  const sagas = [
    watchAuth,
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
      }
    }))
  );
}
