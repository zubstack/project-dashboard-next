import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import Modal from '@common/Modal';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '@contexts/ProductsContext';
import { FormProduct } from '@components/FormProduct';
import { deleteProduct } from '@services/api/products';
import AdminLayout from '@layout/AdminLayout';
import Nav from '@common/Nav';
import Loading from '@common/Loading';
import Button from '@common/Button';
import { useRouter } from 'next/router';
import DeleteConfirm from '@components/DeleteConfirm';

function Products() {
  const { products, loading, updateProducts, getProducts } = useContext(ProductsContext);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [itemToDelete, setItemToDelete] = useState('');
  const router = useRouter();

  useEffect(() => {
    getProducts();
  }, []);

  function handleDelete(id) {
    deleteProduct(id)
      .then(() => {
        console.log('Deleted');
        updateProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Nav page={'Products'} />

      <div className="lg:flex sm:justify-end p-4 ">
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <Button color={'grey'} onClick={() => setOpenModal(true)}>
            <FaPlusCircle className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add Product
          </Button>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
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
                        Brand
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
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-/80">${product.price}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.weight}</td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button color={'grey'} onClick={() => router.push(`../dashboard/edit/${product.id}`)}>
                            Edit
                          </Button>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button
                            color={'red'}
                            onClick={() => {
                              setOpenDelete(true);
                              setItemToDelete(product.id);
                            }}
                          >
                            <FaTrash />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal open={openModal} setOpen={setOpenModal}>
        <FormProduct setOpenModal={setOpenModal}></FormProduct>{' '}
      </Modal>
      <Modal open={openDelete} setOpen={setOpenDelete}>
        <DeleteConfirm onDelete={handleDelete} item={itemToDelete} setOpen={setOpenDelete} />
      </Modal>
    </>
  );
}

Products.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Products;
