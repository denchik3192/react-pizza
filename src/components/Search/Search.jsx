import debounce from 'lodash.debounce';
import React, { useCallback, useContext, useRef, useState } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import s from './search.module.scss';

function Search() {
  const { SetSearchValue } = useContext(SearchContext);
  const [value, setValue] = useState('');
  // const inputRef = useRef();

  // const clearSearch = () => {
  //   SetSearchValue('');
  //   inputRef.current.focus()
  // }
  const updateSearchValue = useCallback(
    debounce((str) => {
      SetSearchValue(str);
    }, 500),
    [],
  );

  const onChaneInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={s.search}>
      <input
        // ref={inputRef}
        type="search"
        name="search"
        id="search"
        placeholder="Поиск..."
        value={value}
        onChange={onChaneInput}
      />
      {/* <svg onclick={clearSearch}></svg> */}
    </div>
  );
}

export default Search;
