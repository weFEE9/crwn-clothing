import { User } from 'firebase/auth';

export type UserState = {
  currentUser: User | null;
};

export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export type Action = {
  type: USER_ACTION_TYPES;
  payload: User | null;
};
