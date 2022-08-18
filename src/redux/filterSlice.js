import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filterItems(state, action) {
      state.value = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterItems } = filterSlice.actions;

// Selectors

export const getFilterValue = state => state.filter.value;
