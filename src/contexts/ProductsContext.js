import { endpoints } from '@services/api';
import axios from 'axios';
import { createContext, useState } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    setLoading(true);

    try {
      const response = await axios.get(endpoints.products.allProducts);
      setProducts(response?.data);
    } catch {
      console.log('Error fetching data:', error);
    }
    setLoading(false);
  }

  async function updateProducts() {
    console.log(['UPDATING PRODUCTS']);
    try {
      const response = await axios.get(endpoints.products.allProducts);
      setProducts(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  console.log('loading', loading);
  return <ProductsContext.Provider value={{ products, setProducts, loading, setLoading, getProducts, updateProducts }}>{children}</ProductsContext.Provider>;
};

export { ProductsContext, ProductsProvider };
