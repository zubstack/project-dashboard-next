import { FaEdit, FaPlusCircle, FaTrash } from 'react-icons/fa';
import Modal from '@common/Modal';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '@contexts/ProductsContext';
import { FormProduct } from '@components/FormProduct';
import { endpoints } from '@services/api';
import { useFetch } from '@hooks/useFetch';
import { deleteProduct } from '@services/api/products';
import axios from 'axios';
import AdminLayout from '@layout/AdminLayout';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Products() {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(endpoints.products.allProducts);
      setProducts(response?.data);
    }
    try {
      getProducts();
    } catch {
      console.log(error);
    }
  }, [openModal]);
  function handleDelete(id) {
    console.log(id);
    deleteProduct(id)
      .then(() => {
        console.log('Deleted');
        const newArray = products.filter((product) => product.id != id);
        setProducts(newArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="lg:flex sm:justify-end p-4 ">
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cafe-600 hover:bg-cafe-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cafe-500"
            onClick={() => setOpenModal(true)}
          >
            <FaPlusCircle className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add Product
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Weight
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.brand}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-black/80">${product.price}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.weight}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href={`../dashboard/edit/${product.id}`} className="text-cafe-600 hover:text-cafe-900">
                          <FaEdit />
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a className="text-cafe-600 hover:text-cafe-900">
                          <FaTrash onClick={() => handleDelete(product.id)} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal open={openModal} setOpen={setOpenModal}>
        <FormProduct setOpenModal={setOpenModal}></FormProduct>{' '}
      </Modal>
    </>
  );
}

Products.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Products;
