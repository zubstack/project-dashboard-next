// const API = process.env.NEXT_PUBLIC_API_URL;
// const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const API = 'http://localhost:3000';

const endpoints = {
  // auth: {
  //   login: `${API}/api/${VERSION}/auth/login`,
  //   profile: `${API}/api/${VERSION}/auth/profile`,
  // },
  products: {
    getProducts: () => `${API}/products`,
    allProducts: `${API}/products`,

    // getProducts: (limit, offfset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offfset}`,
    // getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    // allProducts: `${API}/api/${VERSION}/products`,
    // addProducts: `${API}/api/${VERSION}/products`,
    // updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    // deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
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

export { endpoints };
