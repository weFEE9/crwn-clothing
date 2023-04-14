import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

import { User } from 'firebase/auth';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

type context = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
};

// as the actual value you want to access
export const UserContext = createContext<context>({
  currentUser: null,
  setCurrentUser: () => {},
});

type MyProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: MyProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
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
