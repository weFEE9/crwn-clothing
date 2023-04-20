import { createContext, useState } from 'react';

import SHOP_DATA from '../shop-data';

export type Collection = {
  title: string;
  items: Product[];
};

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type context = {
  collections: Collection[];
};

export const ProductsContext = createContext<context>({
  collections: [],
});

type MyProps = {
  children: React.ReactNode;
};

export const ProductsProvider = ({ children }: MyProps) => {
  const [collections, setCollections] = useState(SHOP_DATA);
  const value = { collections: collections };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
