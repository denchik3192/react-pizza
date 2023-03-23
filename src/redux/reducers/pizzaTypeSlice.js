import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzatype: 0,
};

const pizzaTypeSlice = createSlice({
  name: 'pizzaType',
  initialState: initialState,
  reducers: {
    setPizzaType: (state, action) => {
      console.log(action.payload);
      state.pizzatype = action.payload;
    },
  },
});

export const { setPizzaType } = pizzaTypeSlice.actions;

export default pizzaTypeSlice.reducer;
