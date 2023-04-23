import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItemsContainer,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => {
            return (
              <div key={item.id}>
                <CartItem cartItem={item}></CartItem>
              </div>
            );
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.default}
        onClick={navigateHandler}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
