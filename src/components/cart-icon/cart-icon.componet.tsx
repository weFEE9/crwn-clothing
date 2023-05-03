import { useDispatch, useSelector } from 'react-redux';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer as ItemCount,
} from './cart-icon.styles';
import {
  selectCartTotalCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.reducer';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const totalCount = useSelector(selectCartTotalCount);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount className='item-count'>{totalCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
