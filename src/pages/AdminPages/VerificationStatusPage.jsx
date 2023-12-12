import React from 'react';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';
import VerificationPage from './VerificationStatus_Info';

const VerificationStatusPage = () => {
  return (
    <AdminSidebar>
      <VerificationPage />
    </AdminSidebar>
  );
};

export default VerificationStatusPage;
