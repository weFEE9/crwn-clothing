import { useDispatch } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { Product } from '../../store/categories/category.types';

import './product-card.styles.scss';
import { addItemToCart } from '../../store/cart/cart.reducer';

type MyProps = {
  product: Product;
};

const ProductCard = ({ product }: MyProps) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const addItemHandler = () => dispatch(addItemToCart(product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemHandler}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
