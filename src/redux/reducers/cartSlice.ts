import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export type TCartItem = {
  id: string;
  title: string;
  price: number;
  types: string;
  sizes: number[];
  imageUrl: string;
  count: number;
}

interface ICartItem {
  totalPrice: number,
  items: TCartItem[],
}

const initialState: ICartItem = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TCartItem>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    deleteItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, deleteItems, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
