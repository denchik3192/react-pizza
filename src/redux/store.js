import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pizzaTypeSlice from './reducers/pizzaTypeSlice';

const reducer = combineReducers({
  type: pizzaTypeSlice,
})

const store = configureStore({
  reducer,
})

export default store;
