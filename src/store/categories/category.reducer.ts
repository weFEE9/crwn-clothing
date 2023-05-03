import { createSlice } from '@reduxjs/toolkit';

import { CategoriesState } from './category.types';

export const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  err: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
