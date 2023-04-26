import { Action, CATEGORIES_ACTION_TYPES, Category } from './category.types';

export const setCategories = (categories: Category[]): Action => {
  return {
    type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
    payload: categories,
  };
};
