import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CartItem } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

type MyProps = {
  checkoutItem: CartItem;
};

const CheckoutItem = ({ checkoutItem }: MyProps) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(checkoutItem);
  const removeItemHandler = () => removeItemFromCart(checkoutItem);
  const deleteItemHandler = () => deleteItemFromCart(checkoutItem);

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
