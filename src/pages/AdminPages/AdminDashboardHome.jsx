import React from 'react';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';
import AdminDashboardHome_Info from './AdminDashboardHome_Info';


const AdminDashboardHome = () => {
  return (
    <AdminSidebar>
      <AdminDashboardHome_Info />
    </AdminSidebar>
  );
};

export default AdminDashboardHome;
