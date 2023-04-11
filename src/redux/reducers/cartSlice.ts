import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { getTotalPrice } from '../../utils/getTotalPrice';

export type TCartItem = {
  id: string;
  title: string;
  price: number;
  types: string[];
  sizes: string[];
  imageUrl: string;
  count: number;
}

interface ICartItem {
  totalPrice: number,
  items: TCartItem[],
}

const { items, totalPrice } = getCartFromLS()

const initialState: ICartItem = {
  totalPrice: totalPrice,
  items: items,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TCartItem>) => {

      const findItem = state.items.find((pizza) => {
        return pizza.id === action.payload.id &&
          pizza.sizes.includes(String(...action.payload.sizes)) &&
          pizza.types.includes(String(...action.payload.types))
      });

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = getTotalPrice(state.items);
    },

    minusItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      } else {
        return;
      }
      state.totalPrice = getTotalPrice(state.items);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
      state.totalPrice = getTotalPrice(state.items)
    },

    deleteItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, deleteItems, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
