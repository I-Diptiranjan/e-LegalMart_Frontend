import React from 'react';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';

import Advocates_Info from './Advocates_Info';

const AdvocatePage = () => {
  return (
    <>
      <AdminSidebar>
        <Advocates_Info />
      </AdminSidebar>
    </>
  );
};

export default AdvocatePage;
