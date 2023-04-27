import { CartItem as Item } from '../../store/cart/cart.types';

import './cart-item.styles.scss';

type MyProps = {
  cartItem: Item;
};

const CartItem = ({ cartItem }: MyProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span>
          {price} x ${quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
