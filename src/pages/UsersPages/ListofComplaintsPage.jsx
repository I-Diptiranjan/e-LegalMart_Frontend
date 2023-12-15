import React from 'react';
import UserSidebar from '../../components/Sidebar/UserSidebar';
import ListOfComplaints from './ListOfComplaints';

const ListofComplaintsPage = () => {
  return (
    <UserSidebar>
      <ListOfComplaints />
    </UserSidebar>
  );
};

export default ListofComplaintsPage;
