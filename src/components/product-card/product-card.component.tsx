import Button from '../button/button.component';
import { Product } from '../../contexts/products.context';
import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';
import { useContext } from 'react';

type MyProps = {
  product: Product;
};

const ProductCard = ({ product }: MyProps) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addItemHandler}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
