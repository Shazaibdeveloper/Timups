// src/redux/ProductsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import WatchesData from '../Api/Watchesapi';

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    productList: WatchesData, // Your list of products
    selectedProduct: null,
  },
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { selectProduct } = ProductsSlice.actions;

export default ProductsSlice.reducer;