import AdminLayout from '@layout/AdminLayout';
import React from 'react';

function Account() {
  return <div>account</div>;
}

Account.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Account;
