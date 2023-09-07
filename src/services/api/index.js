// const API = process.env.NEXT_PUBLIC_API_URL;
// const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const API = process.env.NEXT_PUBLIC_API_URL.toString();
// const LOCAL_API = 'http://localhost:4000/api';

const endpoints = {
  // auth: {
  //   login: `${API}/api/${VERSION}/auth/login`,
  //   profile: `${API}/api/${VERSION}/auth/profile`,
  // },
  products: {
    getProducts: () => `${API}/products`,
    allProducts: `${API}/products`,
    addProducts: `${API}/products`,
    getProduct: (id) => `${API}/products/${id}`,
    updateProduct: (id) => `${API}/products/${id}`,
    deleteProduct: (id) => `${API}/products/${id}`,
  },

  orders: {
    getOrders: `${API}/orders`,
  },

  categories: {
    getCategoriesList: () => `${API}/categories`,
    // getCategoriesList: `${API}/api/${VERSION}/categories`,
    // getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    // addCategory: `${API}/api/${VERSION}/categories`,
    // updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    // addFile: `${API}/api/${VERSION}/files/upload`,
  },
};
console.log('API', endpoints.products.getProducts());

export { endpoints };
