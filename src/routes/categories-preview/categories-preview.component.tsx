import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector';
import { Product } from '../../store/categories/category.types';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const collectionsMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div className='category-preview-container'>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(collectionsMap).map((title) => {
          const items = collectionsMap[title];

          return (
            <CategoryPreview
              key={title}
              title={title}
              products={items as Product[]}
            ></CategoryPreview>
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
