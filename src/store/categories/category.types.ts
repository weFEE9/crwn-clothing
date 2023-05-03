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
