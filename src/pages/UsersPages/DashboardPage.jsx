import React from 'react';
import UserSidebar from '../../components/Sidebar/UserSidebar';
import Dashboard from './Dashboard';

const UserDashboardPage = () => {
  return (
    <UserSidebar>
      <Dashboard />
    </UserSidebar>
  );
};

export default UserDashboardPage;
