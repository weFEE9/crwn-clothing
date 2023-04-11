import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

export type ContextUser = {
  id: string;
  name: string | null;
  email: string | null;
  token: string;
};

type context = {
  currentUser: ContextUser | null;
  setCurrentUser: Dispatch<SetStateAction<ContextUser | null>>;
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
  const [currentUser, setCurrentUser] = useState<ContextUser | null>(null);
  const value: context = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
