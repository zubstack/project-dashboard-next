import Button from '@common/Button';
import { ProductsContext } from '@contexts/ProductsContext';
import { addProduct, updateProduct } from '@services/api/products';
import { useRouter } from 'next/router';
import { useContext, useRef } from 'react';
import Swal from 'sweetalert2';

function FormProduct({ setOpenModal, product }) {
  const { updateProducts } = useContext(ProductsContext);
  const router = useRouter();
  const formRef = useRef(null);
  function checkData(data) {
    let pass = true;
    // if (!data.title.match(/\w{5,}/g)) {
    //   alert('Title must be at least 5 characters');
    //   pass = false;
    //   return;
    // }
    // if (!data.price.toString().match(/^[0-9]+$/g)) {
    //   alert('Invalid price');
    //   pass = false;
    //   return;
    // }
    // if (!data.description.match(/\w{5,}/g)) {
    //   alert('Description must be at least 5 characters');
    //   pass = false;
    //   return;
    // }
    // if (!data.images[0].match(/^.+\.(jpg|jpeg|png)$/g)) {
    //   alert('Invalid file extension');
    //   pass = false;
    //   return;
    // }

    return pass;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    const data = {
      name: formData.get('name'),
      price: parseInt(formData.get('price')),
      brand: formData.get('brand'),
      categories: formData.get('category'),
      images: [formData.get('image')],
      weight: formData.get('weight'),
    };

    const validation = checkData(data);
    if (validation) {
      if (product) {
        updateProduct(data, product.id)
          .then(() => {
            updateProducts();
            router.push('/dashboard/products');
            Swal.fire({
              toast: true,
              title: 'Successfuly updated',
              icon: 'success',
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              toast: true,
              title: error.message,
              icon: 'error',
              position: 'top-end',
              showConfirmButton: false,
              timer: 3500,
            });
          });
        return;
      }
      addProduct(data)
        .then(() => {
          updateProducts();
          setOpenModal(false);
          Swal.fire({
            toast: true,
            title: 'Successfuly added',
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            toast: true,
            title: error.message,
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3500,
          });
        });
    }
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                defaultValue={product?.name}
                type="text"
                name="name"
                id="name"
                className="mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                defaultValue={product?.price}
                type="number"
                name="price"
                id="price"
                className="mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                defaultValue={product?.category}
                id="category"
                name="category"
                autoComplete="category-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-darkblue-500 focus:border-darkblue-500 sm:text-sm"
              >
                <option value="Speakers">Speakers</option>
                <option value="Smarthpones">Smarthpones</option>
                <option value="Cables">Cables</option>
                <option value="Tablets">Tablets</option>
                <option value="Computers">Computers</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <input
                defaultValue={product?.brand}
                name="brand"
                id="brand"
                autoComplete="brand"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <input
                defaultValue={product?.weight}
                name="weight"
                id="weight"
                autoComplete="weight"
                rows="3"
                className="form-textarea mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                URL image
              </label>
              <input
                defaultValue={product?.images !== undefined ? product.images[0] : ''}
                name="image"
                id="image"
                autoComplete="image"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <Button width={'120px'} onClick={handleSubmit} color={'grey'}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}

export { FormProduct };
