import { createSlice } from "@reduxjs/toolkit";
 

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
     reducers: {
        add(state,action){
        state.push(action.payload);
        },
        remove(state,action){
            return state.filter(item => item.id !== action.payload)
        },
        incrementItemQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
              item.quantity += 1;
            }
          },
        decrementItemQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            }
          },
        
    }
})

export const {add,remove,incrementItemQuantity,decrementItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;