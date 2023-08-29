import AdminLayout from '@layout/AdminLayout';
import MainLayout from '@layout/MainLayout';
import React from 'react';

function Account() {
  return <MainLayout>account</MainLayout>;
}

Account.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Account;
