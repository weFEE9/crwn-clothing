import React from 'react';
import { Outlet } from 'react-router-dom';

import CategoryMenu from '../../components/category-menu/category-menu.component';

const Home = () => {
  const categories = [
    {
      id: '1',
      title: 'Hats',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: '2',
      title: 'Jackets',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: '3',
      title: 'Sneakers',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: '4',
      title: 'Womens',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: '5',
      title: 'Mens',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <div className='App categories-container'>
      <CategoryMenu categoryItems={categories} />
    </div>
  );
};

export default Home;
