import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { Product } from '../../store/categories/category.types';

const CategoriesPreview = () => {
  const collectionsMap = useSelector(selectCategoriesMap);

  return (
    <div className='category-preview-container'>
      {Object.keys(collectionsMap).map((title) => {
        const items = collectionsMap[title];

        return (
          <CategoryPreview
            key={title}
            title={title}
            products={items as Product[]}
          ></CategoryPreview>
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
