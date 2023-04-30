import {
  Action,
  CATEGORIES_ACTION_TYPES,
  CategoriesState,
} from './category.types';

export const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  err: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action: Action
): CategoriesState => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        err: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
