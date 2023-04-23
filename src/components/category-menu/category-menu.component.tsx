import CategoryItem from '../category-item/category-item.component';
import './category-menu.styles.scss';

const categories = [
  {
    id: '1',
    title: 'Hats',
    subtitle: 'Shop Now',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats',
  },
  {
    id: '2',
    title: 'Jackets',
    subtitle: 'Shop Now',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: '3',
    title: 'Sneakers',
    subtitle: 'Shop Now',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: '4',
    title: 'Womens',
    subtitle: 'Shop Now',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens',
  },
  {
    id: '5',
    title: 'Mens',
    subtitle: 'Shop Now',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens',
  },
];

const CategoryMenu = () => {
  return (
    <div className='menu-container'>
      {categories.map((item) => {
        return <CategoryItem key={item.id} category={item} />;
      })}
    </div>
  );
};

export default CategoryMenu;
