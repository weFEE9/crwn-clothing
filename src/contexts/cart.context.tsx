import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { Product } from './products.context';

type context = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: Product | CartItem) => void;
  removeItemFromCart: (productToRemove: Product | CartItem) => void;
  deleteItemFromCart: (productToDelete: Product | CartItem) => void;
  totalCount: number;
  totalPrice: number;
};

export type CartItem = Product & {
  quantity: number;
};

export const CartContext = createContext<context>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: (productToAdd: Product | CartItem) => {},
  totalCount: 0,
  removeItemFromCart: (cartItemToRemove: Product | CartItem) => {},
  deleteItemFromCart: (productToDelete: Product | CartItem) => {},
  totalPrice: 0,
});

type MyProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: MyProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addItemToCart = (productToAdd: Product | CartItem) => {
    const newItemList = addCartItem(cartItems, productToAdd);
    setCartItems(newItemList);
  };

  const removeItemFromCart = (cartItemToRemove: Product | CartItem) => {
    const newItemList = removeCartItem(cartItems, cartItemToRemove);
    setCartItems(newItemList);
  };

  const deleteItemFromCart = (productToDelete: Product | CartItem) => {
    const newItemList = deleteCartItem(cartItems, productToDelete);
    setCartItems(newItemList);
  };

  useEffect(() => {
    const totalCount = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    setTotalCount(totalCount);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const value: context = {
    isCartOpen,
    setIsCartOpen,
    cartItems: cartItems,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
    deleteItemFromCart: deleteItemFromCart,
    totalCount: totalCount,
    totalPrice: totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: Product | CartItem
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

const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: Product | CartItem
): CartItem[] => {
  const existingItem = cartItems.find((item) => {
    return item.id === cartItemToRemove.id;
  });

  if (existingItem?.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== existingItem.id;
    });
  }

  return cartItems.map((item) => {
    return item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

const deleteCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: Product | CartItem
): CartItem[] => {
  return cartItems.filter((item) => {
    return item.id !== cartItemToRemove.id;
  });
};
