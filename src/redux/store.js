import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';
import pizzaTypeSlice from './reducers/filterSlice';

const store = configureStore({
  reducer: {
    filter: pizzaTypeSlice,
    cart: cartSlice,
  },
});

export default store;
