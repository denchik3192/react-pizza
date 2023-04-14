import debounce from 'lodash.debounce';
import React, { useCallback, useState } from 'react';
import s from './search.module.scss';

import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/reducers/filterSlice';

function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
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
        type="search"
        name="search"
        id="search"
        placeholder="Поиск..."
        value={value}
        onChange={onChaneInput}
      />
    </div>
  );
}

export default Search;
