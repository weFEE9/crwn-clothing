import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Product } from '../../store/categories/category.types';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategories } from '../../store/categories/category.selector';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const collectionsMap = useSelector(selectCategories);

  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    if (!category) {
      return;
    }

    const items = collectionsMap.get(category);

    if (!items) {
      return;
    }

    setProducts(items);
  }, [category, collectionsMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category?.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
