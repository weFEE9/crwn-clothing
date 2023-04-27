export enum CATEGORIES_ACTION_TYPES {
  SET_CATEGORIES = 'SET_CATEGORIES',
}

export type CategoriesState = {
  categories: Category[];
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

export type Action = {
  type: CATEGORIES_ACTION_TYPES;
  payload: Category[];
};
