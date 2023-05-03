import { createSlice } from '@reduxjs/toolkit';

import { CartState, CartItem } from './cart.types';
import { Product } from '../categories/category.types';

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    deleteItemFromCart(state, action) {
      state.cartItems = deleteCartItem(state.cartItems, action.payload);
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

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
