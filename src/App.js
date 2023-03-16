import React from 'react';
import Sort from './components/Sort/Sort';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import './scss/app.scss';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import pizzas from './assets/pizzas.json';

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
            {pizzas.map((obj) => (
              <PizzaBlock {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
