import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from './CartSlice'
import watcheReducer from './watchesSlice';
import searchReducer from './SearchSlice';
import productsReducer from './ProductsSlice';

const store = configureStore({
    reducer:{
         cart: cartReducer,
         watch: watcheReducer,
         search : searchReducer,
         products: productsReducer
    }
})

export default store
