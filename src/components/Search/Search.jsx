import React, { useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import s from './search.module.scss';

function Search() {
  const { searchValue, SetSearchValue } = useContext(SearchContext);
  return (
    <div className={s.search}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Поиск..."
        value={searchValue}
        onChange={(event) => SetSearchValue(event.target.value)}
      />
    </div>
  );
}

export default Search;
