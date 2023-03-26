import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getItems = createAsyncThunk(
  'pizzas/fetchItems',
  async function ({ currentPage, categoryId, sort, searchValue }, { rejectedWithValue }) {
    try {
      const response = await axios.get(
        `https://6415ca5bc42f59a203a72f6d.mockapi.io/items?page=${currentPage}&limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sort.sortProperty}&order=desc&search=${searchValue}`,
      );
      if (response.status !== 200) {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  },
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [getItems.pending]: (state) => {
      state.status = 'loading';
      //   state.items = [];
    },
    [getItems.fulfilled]: (state, action) => {
      console.log(action);
      state.status = 'sucsess';
      state.items = action.payload;
    },
    [getItems.rejected]: (state, action) => {
      state.status = 'rejected';
      state.items = [];
    },
  },
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
