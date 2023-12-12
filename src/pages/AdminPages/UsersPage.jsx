import React from 'react';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';
import Users from './User_Info';

const UsersPage = () => {
  return (
    <AdminSidebar>
      <Users />
    </AdminSidebar>
  );
};

export default UsersPage;
