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
