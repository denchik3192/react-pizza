import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories/Categories';
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort/Sort';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({
    name: 'популярности',
    sortProperty: 'raiting',
  });
  const [category, setCategory] = useState(0);
  console.log(category);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6415ca5bc42f59a203a72f6d.mockapi.io/items?page=${currentPage}&limit=4&${
        category > 0 ? `category=${category}` : ''
      }&sortBy=${sort.sortProperty}&order=desc`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [category, sort, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories category={category} setCategory={(id) => setCategory(id)} />
        <Sort sort={sort} setSort={(id) => setSort(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items?.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onPageChange={(page) => setCurrentPage(page)} />
    </>
  );
}

export default Home;
