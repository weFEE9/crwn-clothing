import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
