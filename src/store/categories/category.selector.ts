import { IRootState } from '../root-reducer';
import { createSelector } from 'reselect';

import { CategoriesMap } from './category.types';

const selectCategoryReducer = (state: IRootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer], // input selector
  (categories) => categories.categories // output selector
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;

      const titleInLowerCase = title.toLowerCase();

      acc[titleInLowerCase] = items;

      return acc;
    }, {} as CategoriesMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categories) => categories.isLoading
);
