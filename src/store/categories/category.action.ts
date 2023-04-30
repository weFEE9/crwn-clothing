import { Dispatch } from 'react';

import {
  Action as CategoriesAction,
  CATEGORIES_ACTION_TYPES,
  Category,
} from './category.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = (): CategoriesAction => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    payload: null,
  };
};

export const fetchCategoriesSuccess = (
  categories: Category[]
): CategoriesAction => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const fetchCategoriesFailed = (err: any): CategoriesAction => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    payload: err,
  };
};

export const fetchCategoriesAsync =
  () => async (dispatch: Dispatch<CategoriesAction>) => {
    dispatch(fetchCategoriesStart());

    try {
      const categories = await getCategoriesAndDocuments();
      dispatch(fetchCategoriesSuccess(categories));
    } catch (err) {
      dispatch(fetchCategoriesFailed(err));
    }
  };
