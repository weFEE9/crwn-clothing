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

export const signUpStart = (email: string, password: string): Action => {
  return {
    type: USER_ACTION_TYPES.SIGN_UP_START,
    payload: {
      email: email,
      password: password,
    },
  };
};

export const signUpSuccess = (user: User): Action => {
  return {
    type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    payload: user,
  };
};

export const signUpFailed = (err: any): Action => {
  return {
    type: USER_ACTION_TYPES.SIGN_UP_FAILED,
    payload: {
      error: err,
    },
  };
};

export const signOutStart = (): Action => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_START,
  };
};

export const signOutSuccess = (): Action => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailed = (err: any): Action => {
  return {
    type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
    payload: {
      error: err,
    },
  };
};
