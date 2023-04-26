import { User } from 'firebase/auth';
import { Action, USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user: User | null): Action => {
  return {
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  };
};
