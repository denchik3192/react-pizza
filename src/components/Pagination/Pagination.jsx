import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ onPageChange }) {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(obj) => onPageChange(obj.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
