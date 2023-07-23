import { createSlice } from '@reduxjs/toolkit';
import Watchesapi from '../Api/Watchesapi';

const watchesSlice = createSlice({
  name: 'watches',
  initialState: {
    watches: Watchesapi, // Your initial list of watches
    filteredWatches: [], // The filtered watches based on the selected category
    selectedCategory: null // The currently selected category
  },
  reducers: {
    filterWatches: (state, action) => {
      const selectedCategory = action.payload;
       state.selectedCategory = selectedCategory;
      state.filteredWatches = state.watches.filter(watch => watch.category === selectedCategory);
    }
  }
});

export const { filterWatches } = watchesSlice.actions;
export default watchesSlice.reducer;
