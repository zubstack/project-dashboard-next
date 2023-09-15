import Button from '@common/Button';
import Nav from '@common/Nav';
import { FormProduct } from '@components/FormProduct';
import AdminLayout from '@layout/AdminLayout';
import { useRouter } from 'next/router';
import React from 'react';

function Add() {
  const router = useRouter();
  return (
    <>
      <Button color={'grey'} onClick={router.back}>
        {'< Back'}
      </Button>
      <Nav title={'Add  product'} />
      <FormProduct></FormProduct>
    </>
  );
}

Add.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Add;
