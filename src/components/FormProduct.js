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
      item: {
        name: formData.get('name'),
        brand: formData.get('brand'),
        model: formData.get('model'),
        description: formData.get('description'),
        price: formData.get('price'),
        availability: formData.get('availability'),
        rating: formData.get('rating'),
        image_url: formData.get('image_url'),
      },
      specifications: {
        keyboard_type: formData.get('keyboard_type'),
        switch_type: formData.get('switch_type'),
        backlighting: formData.get('backlighting'),
        connectivity: formData.get('connectivity'),
        layout: formData.get('layout'),
        dimensions: formData.get('dimensions'),
        weight: formData.get('weight'),
        additional_features: formData.get('additional_features'),
        shipping_information: formData.get('shipping_information'),
      },
    };

    const validation = checkData(data);
    if (validation) {
      if (product) {
        updateProduct(data, product.id)
          .then((response) => {
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
        <div className="px-4 py-5 bg-white sm:p-6 flex gap-10">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                defaultValue={product?.item.name}
                type="text"
                name="name"
                id="name"
                className="mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <input
                defaultValue={product?.item.brand}
                name="brand"
                id="brand"
                autoComplete="brand"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <input
                defaultValue={product?.item.model}
                name="model"
                id="model"
                autoComplete="model"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                defaultValue={product?.item.description}
                name="description"
                id="description"
                autoComplete="description"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                defaultValue={product?.item.price}
                type="number"
                name="price"
                id="price"
                className="mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                Availability
              </label>
              <input
                defaultValue={product?.item.availability}
                name="availability"
                id="availability"
                autoComplete="availability"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                defaultValue={product?.item.rating}
                type="number"
                name="rating"
                id="rating"
                className="mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                URL image
              </label>
              <input
                defaultValue={product?.item.image_url}
                name="image_url"
                id="image_url"
                autoComplete="image_url"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label htmlFor="keyboard_type" className="block text-sm font-medium text-gray-700">
                Keyboard Type
              </label>
              <input
                defaultValue={product?.specifications.keyboard_type}
                name="keyboard_type"
                id="keyboard_type"
                autoComplete="keyboard_type"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="switch_type" className="block text-sm font-medium text-gray-700">
                Switch Type
              </label>
              <input
                defaultValue={product?.specifications.switch_type || 'None'}
                name="switch_type"
                id="switch_type"
                autoComplete="switch_type"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="backlighting" className="block text-sm font-medium text-gray-700">
                Backlighting
              </label>
              <input
                defaultValue={product?.specifications.backlighting}
                name="backlighting"
                id="backlighting"
                autoComplete="backlighting"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="connectivity" className="block text-sm font-medium text-gray-700">
                Connectivity
              </label>
              <input
                defaultValue={product?.specifications.connectivity}
                name="connectivity"
                id="connectivity"
                autoComplete="connectivity"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="layout" className="block text-sm font-medium text-gray-700">
                Layout
              </label>
              <input
                defaultValue={product?.specifications.layout}
                name="layout"
                id="layout"
                autoComplete="layout"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="connectivity" className="block text-sm font-medium text-gray-700">
                Connectivity
              </label>
              <input
                defaultValue={product?.specifications.connectivity}
                name="connectivity"
                id="connectivity"
                autoComplete="connectivity"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">
                Dimensions
              </label>
              <input
                defaultValue={product?.specifications.dimensions}
                name="dimensions"
                id="dimensions"
                autoComplete="dimensions"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <input
                defaultValue={product?.specifications.weight}
                name="weight"
                id="weight"
                autoComplete="weight"
                rows="3"
                className="form-textarea  mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="additional_features" className="block text-sm font-medium text-gray-700">
                Additional features
              </label>
              <input
                defaultValue={product?.specifications.additional_features}
                name="additional_features"
                id="additional_features"
                autoComplete="additional_features"
                rows="3"
                className="form-textarea mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="shipping_information" className="block text-sm font-medium text-gray-700">
                Shipping information
              </label>
              <input
                defaultValue={product?.specifications.shipping_information}
                name="shipping_information"
                id="shipping_information"
                autoComplete="shipping_information"
                rows="3"
                className="form-textarea mt-1 focus:ring-darkblue-500 focus:border-darkblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <Button width={'120px'} onClick={handleSubmit} color={'grey'}>
          Save
        </Button>
      </div>
    </form>
  );
}

export { FormProduct };

// <div className="col-span-6">
//               <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//                 Category
//               </label>
//               <select
//                 defaultValue={product?.category}
//                 id="category"
//                 name="category"
//                 autoComplete="category-name"
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-darkblue-500 focus:border-darkblue-500 sm:text-sm"
//               >
//                 <option value="Speakers">Speakers</option>
//                 <option value="Smarthpones">Smarthpones</option>
//                 <option value="Cables">Cables</option>
//                 <option value="Tablets">Tablets</option>
//                 <option value="Computers">Computers</option>
//               </select>
//             </div>
