import { useFetch } from '@hooks/useFetch';
import { endpoints } from '@services/api';
import { createContext, useState } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const PRODUCT_LIMIT = 5;
  const PRODUCT_OFFSET = 0;
  const [offset, setOffset] = useState(PRODUCT_OFFSET);
  const data = useFetch(endpoints.products.getProducts(PRODUCT_LIMIT, offset));
  const totalProducts = useFetch(endpoints.products.getProducts(0, 0));
  const products = data.data;
  return <ProductsContext.Provider value={{ products, totalProducts, offset, setOffset }}>{children}</ProductsContext.Provider>;
};

export { ProductsContext, ProductsProvider };
