import { addProduct, updateProduct } from '@services/api/products';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Swal from 'sweetalert2';

function FormProduct({ setOpenModal, product }) {
  const router = useRouter();
  const formRef = useRef(null);
  function checkData(data) {
    let pass = true;
    if (!data.title.match(/\w{5,}/g)) {
      alert('Title must be at least 5 characters');
      pass = false;
      return;
    }
    if (!data.price.toString().match(/^[0-9]+$/g)) {
      alert('Invalid price');
      pass = false;
      return;
    }
    if (!data.description.match(/\w{5,}/g)) {
      alert('Description must be at least 5 characters');
      pass = false;
      return;
    }
    if (!data.images[0].match(/^.+\.(jpg|jpeg|png)$/g)) {
      alert('Invalid file extension');
      pass = false;
      return;
    }

    return pass;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      title: formData.get('title'),
      price: parseInt(formData.get('price')),
      description: formData.get('description'),
      categoryId: parseInt(formData.get('category')),
      images: [formData.get('images').name],
    };

    const validation = checkData(data);
    if (validation) {
      if (product) {
        updateProduct(data, product.id)
          .then(() => {
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
          //Added .capitalize property to String prototype:
          // error.response.data.message[0].capitalize()
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
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                defaultValue={product?.title}
                type="text"
                name="title"
                id="title"
                className="mt-1 focus:ring-cafe-500 focus:border-cafe-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                className="mt-1 focus:ring-cafe-500 focus:border-cafe-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cafe-500 focus:border-cafe-500 sm:text-sm"
              >
                <option value="1">Clothes</option>
                <option value="2">Electronics</option>
                <option value="3">Furniture</option>
                <option value="4">Toys</option>
                <option value="5">Others</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                defaultValue={product?.description}
                name="description"
                id="description"
                autoComplete="description"
                rows="3"
                className="form-textarea mt-1 block w-full mt-1 focus:ring-cafe-500 focus:border-cafe-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-cafe-600 hover:text-cafe-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cafe-500"
                      >
                        <span>Upload a file</span>
                        <input defaultValue={product?.images} id="images" name="images" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cafe-600 hover:bg-cafe-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cafe-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export { FormProduct };
