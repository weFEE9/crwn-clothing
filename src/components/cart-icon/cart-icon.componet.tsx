import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer as ItemCount,
} from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount className='item-count'>
        {totalCount}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
