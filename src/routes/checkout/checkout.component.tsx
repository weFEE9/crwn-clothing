import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../store/cart/cart.selector';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return (
          <div key={`${item.id}`}>
            <CheckoutItem checkoutItem={item} />
          </div>
        );
      })}
      <span className='total'>Total: ${totalPrice}</span>
    </div>
  );
};

export default Checkout;
