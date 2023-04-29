import { Dispatch, AnyAction } from 'redux';

import {
  Action as CategoriesAction,
  CATEGORIES_ACTION_TYPES,
  Category,
} from './category.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { categoriesReducer } from './category.reducer';
import { IRootState } from '../root-reducer';

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
  (): ThunkResult<void> => async (dispatch) => {
    dispatch(fetchCategoriesStart());

    try {
      const categories = await getCategoriesAndDocuments();
      dispatch(fetchCategoriesSuccess(categories));
    } catch (err) {
      dispatch(fetchCategoriesFailed(err));
    }
  };

export type ThunkResult<R> = (
  dispatch: Dispatch,
  getState: () => IRootState
) => R;
