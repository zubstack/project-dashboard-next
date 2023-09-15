import Button from '@common/Button';
import Nav from '@common/Nav';
import { FormProduct } from '@components/FormProduct';
import AdminLayout from '@layout/AdminLayout';
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

    // if (!router?.isReady) return;

    async function getProduct() {
      const response = await axios.get(endpoints.products.getProduct(id));
      setProduct(response.data);
    }
    getProduct()
      .then()
      .catch((error) => console.log(error));
  }, [router?.isReady]);
  console.log('product', Object.keys(product).length === 0);

  if (Object.keys(product).length === 0) return;

  return (
    <>
      <Button color={'grey'} onClick={router.back}>
        {'< Back'}
      </Button>
      <Nav title={'Edit'} />
      <FormProduct product={product}></FormProduct>
    </>
  );
}

Edit.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Edit;
