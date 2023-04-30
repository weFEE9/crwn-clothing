import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
  Middleware,
} from 'redux';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { Action as CategoriesAction } from './categories/category.types';
import { Action as UserAction } from './user/user.types';
import { Action as CartAction } from './cart/cart.types';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = <Middleware[]>[thunk];

const isNotProductionEnvironment = process.env.NODE_ENV !== 'production';
if (isNotProductionEnvironment) {
  middlewares.push(logger);
}

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
