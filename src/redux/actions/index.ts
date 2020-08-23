import { createAction } from '@reduxjs/toolkit';

// Only to be used to ignore a redux saga return
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NULL_ACTION = createAction<any>('NULL_ACTION');
