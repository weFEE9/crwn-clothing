import { useDispatch, useSelector } from 'react-redux';

import { CartItem } from '../../store/cart/cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from '../../store/cart/cart.actions';

import './checkout-item.styles.scss';
import { selectCartItems } from '../../store/cart/cart.selector';

type MyProps = {
  checkoutItem: CartItem;
};

const CheckoutItem = ({ checkoutItem }: MyProps) => {
  const { name, imageUrl, price, quantity } = checkoutItem;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(cartItems, checkoutItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, checkoutItem));
  const deleteItemHandler = () =>
    dispatch(deleteItemFromCart(cartItems, checkoutItem));

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
