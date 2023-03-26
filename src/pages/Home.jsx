import axios from 'axios';
import qs from 'qs';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories/Categories';
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort/Sort';
import { SearchContext } from '../Context/SearchContext';
import { setCategoryId, setFilters, setSort } from '../redux/reducers/filterSlice';

function Home() {
  // skip 15
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangeSort = (obj) => {
    dispatch(setSort(obj));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      // dispatch(setFilters(...params, sort));
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6415ca5bc42f59a203a72f6d.mockapi.io/items?page=${currentPage}&limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sort.sortProperty}&order=desc&search=${searchValue}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort, currentPage, searchValue]);

  useEffect(() => {
    const qeryString = qs.stringify({
      categoryId,
      sortProperty: sort.sortProperty,
      currentPage,
    });
    navigate(`?${qeryString}`);
  }, [categoryId, sort, currentPage, searchValue, navigate]);

  return (
    <>
      <div className="content__top">
        <Categories category={categoryId} onChangeCategory={onChangeCategory} />
        <Sort sort={sort} setSort={onChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items?.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination />
    </>
  );
}

export default Home;
