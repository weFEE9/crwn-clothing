import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategories } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
  const collectionsMap = useSelector(selectCategories);

  return (
    <div className='category-preview-container'>
      {Object.keys(collectionsMap).map((title) => {
        const items = collectionsMap.get(title);

        if (!items) {
          throw new Error(`unexpected title: [${title}]`);
        }

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
