import React, { useContext, useState } from 'react';
import Header from './components/Header/Header';
import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { SearchContext } from './Context/SearchContext';

function App() {
  // const inputValue = useContext(SearchValue)
  // const [inputValue, setInputValue] = useState('');

  return (
    <SearchContext.Provider value = ''>
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/cart-empty" element={<Cart />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
    </SearchContext.Provider>
  );
}

export default App;
