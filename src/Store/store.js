import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from './CartSlice'
import watcheReducer from './watchesSlice';
import searchReducer from './SearchSlice';

const store = configureStore({
    reducer:{
         cart: cartReducer,
         watch: watcheReducer,
         search : searchReducer
    }
})

export default store
