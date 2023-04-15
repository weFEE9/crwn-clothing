import { createContext, useState, Dispatch, SetStateAction } from 'react';

type context = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
};

export const CartContext = createContext<context>({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

type MyProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: MyProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const value: context = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
