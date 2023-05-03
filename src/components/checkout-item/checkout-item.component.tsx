import { useDispatch } from 'react-redux';

import { CartItem } from '../../store/cart/cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from '../../store/cart/cart.reducer';

import './checkout-item.styles.scss';

type MyProps = {
  checkoutItem: CartItem;
};

const CheckoutItem = ({ checkoutItem }: MyProps) => {
  const { name, imageUrl, price, quantity } = checkoutItem;

  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(checkoutItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(checkoutItem));
  const deleteItemHandler = () => dispatch(deleteItemFromCart(checkoutItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow'>
          <span onClick={removeItemHandler}>&#10094;</span>
        </div>
        <span className='value'>{quantity}</span>

        <div className='arrow'>
          <span onClick={addItemHandler}>&#10095;</span>
        </div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={deleteItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
