import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { products as initialState } from '../../data/products';

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
