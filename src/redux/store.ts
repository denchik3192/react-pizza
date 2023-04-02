import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';
import pizzaTypeSlice from './reducers/filterSlice';
import pizzasSlice from './reducers/pizzasSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: pizzaTypeSlice,
    cart: cartSlice,
    pizzas: pizzasSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
