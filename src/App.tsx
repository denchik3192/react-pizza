import React, { Suspense, lazy, useState } from 'react';
import Header from './components/Header/Header';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';
// import FullPizza from './pages/FullPizza';
import { SearchContext } from './Context/SearchContext';
const Cart = lazy(() => import('./pages/Cart'));
const NotFound = lazy(() => import('./pages/NotFound'));
const FullPizza = lazy(() => import('./pages/FullPizza'));

function App() {
  const [searchValue, SetSearchValue] = useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, SetSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path="/cart"
                element={
                  <Suspense fallback={'...загрузка'}>
                    <Cart />
                  </Suspense>
                }></Route>
              <Route path="/cart-empty" element={<Cart />}></Route>
              <Route
                path="/pizza/:id"
                element={
                  <Suspense fallback={'...загрузка'}>
                    <FullPizza />
                  </Suspense>
                }></Route>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="*"
                element={
                  <Suspense fallback={'...загрузка'}>
                    <NotFound />
                  </Suspense>
                }></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
