import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';

import { ProductsContext } from '../../contexts/products.context';
import { Product } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { collections } = useContext(ProductsContext);

  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    const targetCollection = collections.find((collection) => {
      const { title } = collection;
      const titleInLowerCase = title.toLocaleLowerCase();
      const categoryInLowerCase = category?.toLocaleLowerCase();

      return titleInLowerCase === categoryInLowerCase;
    });

    if (!targetCollection) {
      return;
    }

    setProducts(targetCollection.items);
  }, [category, collections]);

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
