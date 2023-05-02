import { User } from 'firebase/auth';
import { Action, USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user: User): Action => {
  return {
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  };
};

export const checkUserSession = (): Action => {
  return {
    type: USER_ACTION_TYPES.CHECK_USER_SESSION,
  };
};

export const googleSignInStart = (): Action => {
  return {
    type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
  };
};

export const emailSignInStart = (email: string, password: string): Action => {
  return {
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: {
      email: email,
      password: password,
    },
  };
};

export const signInSuccess = (user: User): Action => {
  return {
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailed = (error: any): Action => {
  return {
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: error,
  };
};
