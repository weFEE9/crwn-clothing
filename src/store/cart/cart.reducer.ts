import { CartState, Action, CART_ACTIONS_TYPES } from './cart.types';

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartReducer = (
  state: CartState = INITIAL_STATE,
  action: Action
) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
