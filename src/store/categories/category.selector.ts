import { IRootState } from '../root-reducer';
import { Product } from './category.types';

export const selectCategories = (state: IRootState) =>
  state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;

    const titleInLowerCase = title.toLowerCase();

    acc.set(titleInLowerCase, items);

    return acc;
  }, new Map<string, Product[]>());
