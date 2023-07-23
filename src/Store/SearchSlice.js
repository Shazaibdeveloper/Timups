// SearchSlice.js
import { createSlice } from '@reduxjs/toolkit';
import WatchesData from '../Api/Watchesapi'; // Import your JSON data

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
      searchResults: [],
    },
    reducers: {
      searchWatch: (state, action) => {
        const searchQuery = typeof action.payload === 'string' ? action.payload.toLowerCase() : ''; 
        state.searchResults = WatchesData.filter((watch) =>
          watch.name.toLowerCase().includes(searchQuery)
        );
      },
    },
  });
  

export const { searchWatch } = SearchSlice.actions;
export default SearchSlice.reducer;
