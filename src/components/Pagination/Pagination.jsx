import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/reducers/filterSlice';
import s from './pagination.module.scss';

function Pagination() {
  const dispatch = useDispatch();
  return (
    <div>
      <ReactPaginate
        className={s.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(obj) => dispatch(setCurrentPage(obj.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
