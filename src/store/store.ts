// import {
//   compose,
//   legacy_createStore as createStore,
//   applyMiddleware,
//   Middleware,
// } from 'redux';

import { configureStore, Middleware } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import createSagaMiddleware from '@redux-saga/core';

// import { rootSaga } from './root-saga';
// import { rootReducer } from './root-reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// };

// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = <Middleware[]>[];

const isNotProductionEnvironment = process.env.NODE_ENV !== 'production';
if (isNotProductionEnvironment) {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

// const composedEnhancers = compose(applyMiddleware(...middlewares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
