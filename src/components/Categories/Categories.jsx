import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzaType } from '../../redux/reducers/pizzaTypeSlice';

// function Categories({ category, setCategory }) {
function Categories() {
  const category = useSelector(state => state.type.pizzatype);
  console.log(category);
  const dispatch = useDispatch();
  const categoryData = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Мясные' },
    { id: 2, name: 'Вегетарианская' },
    { id: 3, name: 'Гриль' },
    { id: 4, name: 'Острые' },
    { id: 5, name: 'Закрытые' },
  ];

  const categoryList = categoryData.map((c) => {
    return (
      <li
        className={c.id === category ? 'active' : ''}
        key={c.id}
        onClick={() => dispatch(setPizzaType(c.id))}>
        {c.name}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>{categoryList}</ul>
    </div>
  );
}

export default Categories;
