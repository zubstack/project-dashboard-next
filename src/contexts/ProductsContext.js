import { useFetch } from '@hooks/useFetch';
import { endpoints } from '@services/api';
import { createContext, useState } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const data = useFetch(endpoints.products.getProducts());
  const [loading, setLoading] = useState(0);

  const products = data.data;

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

export { ProductsContext, ProductsProvider };
