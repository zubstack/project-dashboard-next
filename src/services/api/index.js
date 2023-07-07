const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
    auth:{
        login:()=>{
            `${API}/api/${VERSION}/auth/login`;
        },
        profile:()=>{
            `${API}/api/${VERSION}/auth/profile`;

        }
    },
  products: {
    getProducts: () => {
      `${API}/api/${VERSION}/products`;
    },
    getProduct: (id) => {
      `${API}/api/${VERSION}/products/${id}`;
    },
    postProducts: () => {
      `${API}/api/${VERSION}/products`;
    },
    putProduct: (id) => {
      `${API}/api/${VERSION}/products/${id}`;
    },
    deleteProduct: (id) => {
      `${API}/api/${VERSION}/products/${id}`;
    },
  },
  users: {
    getUsers: () => {
      `${API}/api/${VERSION}/users`;
    },
    getUser: (id) => {
        /api/v1/users/is-available;
    },
    postUser: () => {
      `${API}/api/${VERSION}/users`;
    },
    postIsUserAvaible: () => {
      `${API}/api/${VERSION}/users/is-available`;
    },
    putUser: (id) => {
      `${API}/api/${VERSION}/users${id}`;
    },
    deleteUser: (id) => {
      `${API}/api/${VERSION}/users${id}`;
    },
  },
  categories:{
    getCategories:()=>{
        `${API}/api/${VERSION}/categories`;

    },
    getCategory:(id)=>{
        `${API}/api/${VERSION}/categories/${id}`;

    },
    postCategory:()=>{
        `${API}/api/${VERSION}/categories`;

    },
    putCategory:(id)=>{
        `${API}/api/${VERSION}/categories/${id}`;

    },
    deleteCategory:(id)=>{
        `${API}/api/${VERSION}/categories/${id}`;

    }},
   files:{
    postFile:()=>{
        `${API}/api/${VERSION}/files/upload`
    }
   },
   getFile:(filename)=>{
    `${API}/api/${VERSION}/files/${filename}`
   }
  }

  export{endpoints}
