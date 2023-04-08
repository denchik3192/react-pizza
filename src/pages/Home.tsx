import qs from 'qs';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Categories from '../components/Categories/Categories';
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort/Sort';
import { setCategoryId, setSort } from '../redux/reducers/filterSlice';
import { getItems } from '../redux/reducers/pizzasSlice';
import { RootState, useAppDispatch } from '../redux/store';

function Home() {
  const items = useSelector((state: any) => state.pizzas.items);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categoryId, sort, currentPage } = useSelector((state: RootState) => state.filter);
  const searchValue = useSelector((state: RootState) => state.pizzas.searchValue);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangeSort = (obj: any) => {
    dispatch(setSort(obj));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      // dispatch(setFilters(...params, sort));
    }
  }, []);

  async function fetchPizzas() {
    try {
      dispatch(
        getItems({
          currentPage,
          categoryId,
          sort,
          searchValue,
        }),
      );
    } catch (error) {
      alert('Ошибка при получении пиц');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchPizzas();
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
          : items?.map((obj: any) => (
              <div key={obj.id}>
                <PizzaBlock {...obj} />
              </div>
            ))}
      </div>
      <Pagination />
    </>
  );
}

export default Home;
