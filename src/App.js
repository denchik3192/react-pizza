import React from 'react';
import Sort from './components/Sort/Sort';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import './scss/app.scss';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title={'Mexican'} price={'500'} />
            <PizzaBlock title={'Mexican'} price={'600'} />
            <PizzaBlock title={'4 seazons'} price={'800'} />
            <PizzaBlock title={'Mexican'} price={'900'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
