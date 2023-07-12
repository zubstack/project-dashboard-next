import Modal from '@common/Modal';
import { FormProduct } from '@components/FormProduct';
import { endpoints } from '@services/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Edit() {
  const router = useRouter();
  //   console.log(router?.isReady); returns false, but after a seconds returns true cause there are a value.
  const [product, setProduct] = useState({});

  useEffect(() => {
    const { id } = router.query;

    if (!router?.isReady) return;

    async function getProduct() {
      const response = await axios.get(endpoints.products.getProduct(id));
      setProduct(response.data);
    }
    getProduct()
      .then()
      .catch((error) => console.log(error));
  }, [router?.isReady]);
  console.log(product);

  return <FormProduct product={product}></FormProduct>;
}

export default Edit;
