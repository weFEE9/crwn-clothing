import { configureStore, Middleware } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

import logger from 'redux-logger';

const middlewares = <Middleware[]>[];

const isNotProductionEnvironment = process.env.NODE_ENV !== 'production';
if (isNotProductionEnvironment) {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
