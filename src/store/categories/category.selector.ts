import { IRootState } from '../root-reducer';

export const selectCategories = (state: IRootState) => state.categories.categories;
