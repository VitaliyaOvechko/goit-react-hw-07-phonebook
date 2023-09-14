import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    filteredContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filteredContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
