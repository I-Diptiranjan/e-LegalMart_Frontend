import React from 'react';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';
import LegalServiceProviders_Info from './LegalServiceProvider_Info';

export const LegalServiceProviderPage = () => {
  return (
    <AdminSidebar>
      <LegalServiceProviders_Info />
    </AdminSidebar>
  );
};
