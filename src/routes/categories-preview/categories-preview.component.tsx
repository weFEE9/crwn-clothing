import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategories } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
  const collections = useSelector(selectCategories);

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
