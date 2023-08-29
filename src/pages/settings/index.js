import AdminLayout from '@layout/AdminLayout';
import MainLayout from '@layout/MainLayout';
import React from 'react';

function Settings() {
  return <MainLayout>Settings</MainLayout>;
}

Settings.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Settings;
