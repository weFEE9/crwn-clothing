import { Product } from '../categories/category.types';

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
  totalCount: number;
  totalPrice: number;
};

export type CartItem = Product & {
  quantity: number;
};

export enum CART_ACTIONS_TYPES {
  SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  SET_CART_TOTAL_COUNT = 'cart/SET_CART_TOTAL_COUNT',
  SET_CART_TOTAL_PRICE = 'cart/SET_CART_TOTAL_PRICE',
}

export type Action = SET_CART_ITEMS_ACTION | SET_CAST_IS_OPEN_ACTION;

type SET_CART_ITEMS_ACTION = {
  type: CART_ACTIONS_TYPES.SET_CART_ITEMS;
  payload: {
    cartItems: CartItem[];
  };
};

type SET_CAST_IS_OPEN_ACTION = {
  type: CART_ACTIONS_TYPES.SET_IS_CART_OPEN;
  payload: {
    isCartOpen: boolean;
  };
};
