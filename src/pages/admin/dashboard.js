import React from 'react';
import { AdminLayout } from '../../layout/AdminLayout';

function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
