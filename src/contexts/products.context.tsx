import { createContext, useState, Dispatch, SetStateAction } from 'react';

import shopdatas from '../shop-data.json';


const PRODUCTS: Product[] = shopdatas;

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type context = {
  products: Product[];
};

export const ProductsContext = createContext<context>({
  products: [],
});

type MyProps = {
  children: React.ReactNode;
};

export const ProductsProvider = ({ children }: MyProps) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
