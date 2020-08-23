// External Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Internal Dependencies
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

// Exports
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
