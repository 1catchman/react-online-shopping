import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';
import { ProductsProps } from '../data/products';

interface cartState {
  cartProducts: ProductsProps[];
  totalPrice: number;
  quantity?: {
    [key: string]: number;
  };
}

const initialState: cartState = {
  cartProducts: [],
  totalPrice: 0,
  quantity: {}
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductsProps>) => {
      if (
        state.cartProducts.find(
          (item) => item.id === action.payload.id
        )
      ) {
        state.quantity![action.payload.id] += 1;
      } else {
        state.cartProducts.push(action.payload);
        state.quantity![action.payload.id] = 1;
      }
      state.totalPrice += action.payload.price;
    },
    addAmountProducts: (
      state,
      action: PayloadAction<ProductsProps[]>
    ) => {
      if (
        state.cartProducts.find(
          (item) => item.id === action.payload[0].id
        )
      ) {
        state.quantity![action.payload[0].id] +=
          action.payload.length;
      } else {
        state.cartProducts.push(action.payload[0]);
        state.quantity![action.payload[0].id] = action.payload.length;
      }
      state.totalPrice +=
        action.payload.length * action.payload[0].price;
    },
    removeProduct: (state, action: PayloadAction<ProductsProps>) => {
      if (state.quantity![action.payload.id] < 2)
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload.id
        );
      state.quantity![action.payload.id] > 0 &&
        state.quantity![action.payload.id]--;
      state.totalPrice -= action.payload.price;
    }
  }
});

export const { addProduct, addAmountProducts, removeProduct } =
  cartSlice.actions;

export const cartProducts = (state: RootState) =>
  state.cart.cartProducts;
export const totalPrice = (state: RootState) => state.cart.totalPrice;
export const quantity = (state: RootState) => state.cart.quantity;

export default cartSlice.reducer;
