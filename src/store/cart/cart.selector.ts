import { createSelector } from 'reselect';
import { IRootState } from '../root-reducer';

const selectCartReducer = (state: IRootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartTotalCount = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => {
    return total + item.quantity;
  }, 0)
);

export const selectCartTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0)
);
