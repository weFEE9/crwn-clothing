import { User } from 'firebase/auth';

export type UserState = {
  currentUser: User | null;
  isLoading: boolean;
  error: any;
};

export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = 'user/SET_CURRENT_USER',
  CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
  GOOGLE_SIGN_IN_START = 'user/GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START = 'user/EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS',
  SIGN_IN_FAILED = 'user/SIGN_IN_FAILED',
  SIGN_UP_START = 'user/SIGN_UP_START',
  SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS',
  SIGN_UP_FAILED = 'user/SIGN_UP_START',
}

export type Action =
  | setCurrentUserAction
  | checkUserSessionAction
  | googleSignInStartAction
  | emailSignInStartAction
  | signInSuccessAction
  | signInFailedAction
  | signUpStartAction
  | signUpSuccessAction
  | signUpFailedAction;

type setCurrentUserAction = {
  type: USER_ACTION_TYPES.SET_CURRENT_USER;
  payload: User;
};

type checkUserSessionAction = {
  type: USER_ACTION_TYPES.CHECK_USER_SESSION;
  payload?: null;
};

type googleSignInStartAction = {
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START;
  payload?: null;
};

export type emailSignInStartAction = {
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START;
  payload: {
    email: string;
    password: string;
  };
};

type signInSuccessAction = {
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS;
  payload: User;
};

type signInFailedAction = {
  type: USER_ACTION_TYPES.SIGN_IN_FAILED;
  payload: {
    error: any;
  };
};

export type signUpStartAction = {
  type: USER_ACTION_TYPES.SIGN_UP_START;
  payload: {
    email: string;
    password: string;
  };
};

export type signUpSuccessAction = {
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS;
  payload: User;
};

type signUpFailedAction = {
  type: USER_ACTION_TYPES.SIGN_UP_FAILED;
  payload: {
    error: any;
  };
};
