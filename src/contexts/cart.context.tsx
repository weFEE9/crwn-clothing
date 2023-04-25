import { createContext, useReducer } from 'react';
import { Product } from './products.context';

type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
  totalCount: number;
  totalPrice: number;
};

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  totalCount: 0,
  totalPrice: 0,
};

enum CART_ACTION_TYPE {
  SET_IS_CART_OPEN = 'SET_IS_CART_OPEN',
  SET_CART_ITEMS = 'SET_CART_ITEMS',
}

type Action = SET_CART_ITEMS_ACTION | SET_CAST_IS_OPEN_ACTION;

type SET_CART_ITEMS_ACTION = {
  type: CART_ACTION_TYPE.SET_CART_ITEMS;
  payload: {
    cartItems: CartItem[];
    totalCount: number;
    totalPrice: number;
  };
};

type SET_CAST_IS_OPEN_ACTION = {
  type: CART_ACTION_TYPE.SET_IS_CART_OPEN;
  payload: {
    isCartOpen: boolean;
  };
};

const cartReducer = (state: CartState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

type context = {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
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
  const [{ isCartOpen, cartItems, totalCount, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems: CartItem[]) => {
    const newTotalCount = newCartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    const newTotalPrice = newCartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    dispatch({
      type: CART_ACTION_TYPE.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        totalCount: newTotalCount,
        totalPrice: newTotalPrice,
      },
    });
  };

  const addItemToCart = (productToAdd: Product | CartItem) => {
    const newItemList = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newItemList);
  };

  const removeItemFromCart = (cartItemToRemove: Product | CartItem) => {
    const newItemList = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newItemList);
  };

  const deleteItemFromCart = (productToDelete: Product | CartItem) => {
    const newItemList = deleteCartItem(cartItems, productToDelete);
    updateCartItemsReducer(newItemList);
  };

  const setIsCartOpenReducer = (isOpen: boolean) => {
    dispatch({
      type: CART_ACTION_TYPE.SET_IS_CART_OPEN,
      payload: {
        isCartOpen: isOpen,
      },
    });
  };

  const value: context = {
    isCartOpen,
    setIsCartOpen: setIsCartOpenReducer,
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
