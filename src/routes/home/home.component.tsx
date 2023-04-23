import React from 'react';
import { Outlet } from 'react-router-dom';

import CategoryMenu from '../../components/category-menu/category-menu.component';

const Home = () => {
  return (
    <div className='App categories-container'>
      <CategoryMenu />
    </div>
  );
};

export default Home;
