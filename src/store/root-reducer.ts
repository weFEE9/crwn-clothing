import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
