import React, { useState } from 'react';
import Header from './components/Header/Header';
import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { SearchContext } from './Context/SearchContext';
import FullPizza from './pages/FullPizza';

function App() {
  const [searchValue, SetSearchValue] = useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, SetSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/cart-empty" element={<Cart />}></Route>
              <Route path="/pizza/:id" element={<FullPizza />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
