import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type TSort = {
  name: string,
  sortProperty: 'raiting' | 'title' | 'price',
}

interface IFilter {
  categoryId: number,
  currentPage: number,
  sort: TSort,
}

const initialState: IFilter = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'raiting',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action: PayloadAction<TSort>) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<any>) => {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
