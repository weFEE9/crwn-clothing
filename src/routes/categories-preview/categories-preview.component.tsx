import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { collections } = useContext(ProductsContext);
  return (
    <div className='category-preview-container'>
      {collections.map((collection) => {
        const { title, items } = collection;

        return (
          <CategoryPreview
            key={title}
            title={title}
            products={items}
          ></CategoryPreview>
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
