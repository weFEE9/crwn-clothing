import CategoryItem from '../category-item/category-item.component';
import './category-menu.styles.scss';

type MyProps = {
  categoryItems: Item[];
};

type Item = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

const CategoryMenu = ({ categoryItems }: MyProps) => {
  return (
    <div className='menu-container'>
      {categoryItems.map((item) => {
        return <CategoryItem key={item.id} category={item} />;
      })}
    </div>
  );
};

export default CategoryMenu;
