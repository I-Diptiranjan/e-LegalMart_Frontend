import React from 'react';
import UserSidebar from '../../components/Sidebar/UserSidebar';
import { Home } from './Home';

const UserHomePage = () => {
  return (
    <UserSidebar>
      <Home />
    </UserSidebar>
  );
};

export default UserHomePage;
