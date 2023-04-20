import './cart-dropdown.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <CartItem cartItem={item}></CartItem>;
            </div>
          );
        })}
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.default}
        onClick={navigateHandler}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
