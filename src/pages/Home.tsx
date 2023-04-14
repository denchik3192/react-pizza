import qs from 'qs';
import React, { useCallback, useEffect } from 'react';
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status, items } = useSelector((state: RootState) => state.pizzas);
  const { categoryId, sort, currentPage } = useSelector((state: RootState) => state.filter);
  const searchValue = useSelector((state: RootState) => state.pizzas.searchValue);

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
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    try {
      dispatch(
        getItems({
          currentPage,
          categoryId,
          sortBy,
          searchValue,
          order,
        }),
      );
    } catch (error) {
      alert('Ошибка при получении пиц');
    } finally {
    }
  }

  useEffect(() => {
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

  const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items?.map((obj: any) => (
    <div key={obj.id}>
      <PizzaBlock {...obj} />
    </div>
  ));

  return (
    <>
      <div className="content__top">
        <Categories category={categoryId} onChangeCategory={onChangeCategory} />
        <Sort sort={sort} setSort={onChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{status === 'loading' ? skeleton : pizzas}</div>
      <Pagination />
    </>
  );
}

export default Home;
