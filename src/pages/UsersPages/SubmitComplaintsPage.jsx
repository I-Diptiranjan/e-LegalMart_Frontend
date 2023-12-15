import React from 'react';
import UserSidebar from '../../components/Sidebar/UserSidebar';
import SubmitComplaints from './SubmitComplaints';

const SubmitComplaintsPage = () => {
  return (
    <UserSidebar>
      <SubmitComplaints />
    </UserSidebar>
  );
};

export default SubmitComplaintsPage;
