import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { Product } from './products.context';
import { toASCII } from 'punycode';

type context = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: Product) => void;
  totalCount: number;
};

export type CartItem = Product & {
  quantity: number;
};

export const CartContext = createContext<context>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: (productToAdd: Product) => {},
  totalCount: 0,
});

type MyProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: MyProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const addItemToCart = (productToAdd: Product) => {
    const newItemList = addCartItem(cartItems, productToAdd);
    setCartItems(newItemList);
  };

  useEffect(() => {
    const totalCount = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalCount(totalCount);
  }, [cartItems]);

  const updateTotalCount = () => {
    const totalCount = countCartItmes(cartItems);
    setTotalCount(totalCount);
  };

  const value: context = {
    isCartOpen,
    setIsCartOpen,
    cartItems: cartItems,
    addItemToCart: addItemToCart,
    totalCount: totalCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: Product
): CartItem[] => {
  const cartItemExist = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  // find if cartItems contains productToAdd
  if (cartItemExist) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  // return new array with modified cartItems w/ new cart item

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const countCartItmes = (cartItems: CartItem[]): number => {
  let count = 0;
  cartItems.forEach((item) => {
    count += item.quantity;
  });

  return count;
};
