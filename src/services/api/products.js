import axios from 'axios';

const { endpoints } = require('.');

async function addProduct(data, id) {
  if (!id) {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(endpoints.products.addProducts, data, options);
    return response.data;
  } else {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.put(endpoints.products.updateProduct(id), data, options);
    console.log('PUT');

    return response.data;
  }
}
async function deleteProduct(id) {
  const options = {
    headers: {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    },
  };
  const response = await axios.delete(endpoints.products.deleteProduct(id), options);
  console.log(response.data);
}

export { addProduct, deleteProduct };
