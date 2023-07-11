import axios from 'axios';

const { endpoints } = require('.');

async function addProduct(data) {
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endpoints.products.addProducts, data, options);
  return response.data;
}

export { addProduct };
