import { Action, CartItem, CART_ACTIONS_TYPES } from './cart.types';
import { Product } from '../categories/category.types';

export const setIsCartOpen = (isOpen: boolean): Action => {
  return {
    type: CART_ACTIONS_TYPES.SET_IS_CART_OPEN,
    payload: {
      isCartOpen: isOpen,
    },
  };
};

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: Product | CartItem
): Action => {
  const newItemList = addCartItem(cartItems, productToAdd);
  return {
    type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload: {
      cartItems: newItemList,
    },
  };
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: Product | CartItem
): Action => {
  const newItemList = removeCartItem(cartItems, cartItemToRemove);
  return {
    type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload: {
      cartItems: newItemList,
    },
  };
};

export const deleteItemFromCart = (
  cartItems: CartItem[],
  productToDelete: Product | CartItem
): Action => {
  const newItemList = deleteCartItem(cartItems, productToDelete);
  return {
    type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload: {
      cartItems: newItemList,
    },
  };
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
