import React from 'react';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';
import Complaints from './ComplainReceived_Info';

const ComplainReceivedPage = () => {
  return (
    <AdminSidebar>
      <Complaints />
    </AdminSidebar>
  );
};

export default ComplainReceivedPage;
