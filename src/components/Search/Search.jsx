import React from 'react';
import s from './search.module.scss'

function Search() {
  return (
    <div className={s.search}>
      <input type="search" name="" id="" placeholder='Поиск...' />
    </div>
  );
}

export default Search;
