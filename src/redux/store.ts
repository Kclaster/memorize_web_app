// External Dependencies
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// Internal Dependencies
import rootReducer, { RootState } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware<RootState>();

const customizedMiddleware = getDefaultMiddleware<RootState, { thunk: false }>({ thunk: false });

const store = configureStore({
  middleware: [...customizedMiddleware, sagaMiddleware],
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    const newRootReducer = require('./reducers').default;
    store.replaceReducer(newRootReducer);
  });
}

sagaMiddleware.run(rootSaga);

// Exports
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
