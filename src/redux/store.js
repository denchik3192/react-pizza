import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';
import pizzaTypeSlice from './reducers/filterSlice';
import pizzasSlice from './reducers/pizzasSlice';

const store = configureStore({
  reducer: {
    filter: pizzaTypeSlice,
    cart: cartSlice,
    pizzas: pizzasSlice,
  },
});

export default store;
