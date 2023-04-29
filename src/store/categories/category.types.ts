export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED = 'FETCH_CATEGORIES_FAILED',
}

export type CategoriesState = {
  categories: Category[];
  isLoading: boolean;
  err: Error | null;
};

export type Category = {
  title: string;
  items: Product[];
};

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type CategoriesMap = {
  [key: string]: Product[];
};

export type Action = fetchStartAction | fetchSuccessAction | fetchFailedAction;

type fetchSuccessAction = {
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS;
  payload: Category[];
};

type fetchStartAction = {
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START;
  payload: null;
};

type fetchFailedAction = {
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED;
  payload: Error;
};
