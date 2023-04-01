import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/reducers/filterSlice';
import s from './pagination.module.scss';

const Pagination: React.FC = () => {
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
      />
    </div>
  );
};

export default Pagination;
