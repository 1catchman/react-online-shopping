import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';
import { ProductsProps } from '../data/products';

interface favouritesProps {
  favourites: ProductsProps[];
}

const initialState: favouritesProps = {
  favourites: []
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavouriteProduct: (
      state,
      action: PayloadAction<ProductsProps>
    ) => {
      !state.favourites.find(
        (item) => item.id === action.payload.id
      ) && state.favourites.push(action.payload);
    },
    removeFavouriteProduct: (
      state,
      action: PayloadAction<ProductsProps>
    ) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload.id
      );
    }
  }
});

export const { addFavouriteProduct, removeFavouriteProduct } =
  favouritesSlice.actions;

export const favoutireProducts = (state: RootState) =>
  state.favourites.favourites;

export default favouritesSlice.reducer;
