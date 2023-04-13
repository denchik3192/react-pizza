import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type TFetchPizzaArgs = {
  currentPage: number,
  categoryId: number,
  sort: {
    name: string,
    sortProperty: string,
  },
  searchValue: string,
}
type TPizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}

interface Ipizza {
  items: TPizzaItem[],
  searchValue: string,
  status: 'loading' | 'sucsess' | 'rejected';
  error: string,
}

export const getItems = createAsyncThunk<TPizzaItem[], TFetchPizzaArgs>(
  'pizzas/fetchItems',
  async function ({ currentPage, categoryId, sort, searchValue }, { rejectedWithValue }: any) {
    console.log(sort);

    try {
      const response = await axios.get<TPizzaItem>(
        `https://6415ca5bc42f59a203a72f6d.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sort.sortProperty}&order=desc&search=${searchValue}`,
      );
      if (response.status !== 200) {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (error: any) {
      return rejectedWithValue(error.message);
    }
  },
);


const initialState: Ipizza = {
  items: [],
  searchValue: '',
  status: 'loading',
  error: '',
}


const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TPizzaItem[]>) {
      state.items = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    })
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.status = 'sucsess';
      state.items = action.payload;
    })
    builder.addCase(getItems.rejected, (state) => {
      state.status = 'rejected';
      state.items = [];
    })
  },
});

export const { setItems, setSearchValue } = pizzasSlice.actions;
export default pizzasSlice.reducer;
