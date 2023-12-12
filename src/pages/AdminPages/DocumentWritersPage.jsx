import React from 'react';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';
import DocumentWriters_Info from './DocumentWriters_Info';

const DocumentWritersPage = () => {
  return (
    <AdminSidebar>
      <DocumentWriters_Info />
    </AdminSidebar>
  );
};

export default DocumentWritersPage;
