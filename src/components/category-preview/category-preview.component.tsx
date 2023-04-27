import { Link } from 'react-router-dom';
import { Product } from '../../store/categories/category.types';
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

type MyProps = {
  title: string;
  products: Product[];
};

const CategoryPreview = ({ title, products }: MyProps) => {
  const titleInLowerCase = title.toLocaleLowerCase();
  const titleInUpperCase = title.toLocaleUpperCase();

  console.log('~~~~', title, products);

  return (
    <div className='category-preview-container'>
      <h2>
        <Link className={title} to={titleInLowerCase}>
          {titleInUpperCase}
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
