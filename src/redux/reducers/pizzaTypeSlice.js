import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzatype: 'all',
};

const pizzaTypeSlice = createSlice({
  name: 'pizzaType',
  initialState,
  reducers: {
    setPizzaType: (state, action) => {
      state.pizzatype = action.payload;
    },
  },
});

export const { setPizzaType } = pizzaTypeSlice.actions;

export default pizzaTypeSlice;
