import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-itme' />
      <Button buttonType='default'>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
