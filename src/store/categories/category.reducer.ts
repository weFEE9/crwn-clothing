import {
  Action,
  CATEGORIES_ACTION_TYPES,
  CategoriesState,
} from './category.types';

export const INITIAL_STATE: CategoriesState = {
  categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};
