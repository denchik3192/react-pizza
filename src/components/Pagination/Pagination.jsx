import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './pagination.module.scss'

function Pagination({ onPageChange }) {
  return (
    <div>
      <ReactPaginate
        className={s.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(obj) => onPageChange(obj.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
