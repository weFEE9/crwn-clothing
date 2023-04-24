import React, { createContext, useEffect, useReducer } from 'react';

import { User } from 'firebase/auth';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

type context = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

// as the actual value you want to access
export const UserContext = createContext<context>({
  currentUser: null,
  setCurrentUser: (user: User | null) => {},
});

type MyProps = {
  children: React.ReactNode;
};

type UserState = {
  currentUser: User | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
};

enum USER_ACTION_TYPES {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

type Action = {
  type: keyof typeof USER_ACTION_TYPES;
  payload: User | null;
};

const userReducer = (state: UserState, action: Action) => {
  console.log('dispatch');
  console.log(action);

  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`unexpected type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }: MyProps) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);

  const setCurrentUser = (user: User | null) => {
    dispatch({
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user,
    } as Action);
  };

  const value: context = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
