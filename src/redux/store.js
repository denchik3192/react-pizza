import { configureStore } from '@reduxjs/toolkit';
import pizzaTypeSlice from './reducers/filterSlice';

const store = configureStore({
  reducer: {
    filter: pizzaTypeSlice,
  },
});

export default store;
