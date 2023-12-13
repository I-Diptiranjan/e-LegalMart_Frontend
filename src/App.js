import React, { StrictMode } from 'react';
import AdvocatePage from './pages/AdminPages/AdvocatePage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ArbitratorsPage from './pages/AdminPages/ArbitratorsPage';
import DocumentWritersPage from './pages/AdminPages/DocumentWritersPage';
import { LegalServiceProviderPage } from './pages/AdminPages/LegalServiceProviderPage';
import ComplainReceivedPage from './pages/AdminPages/ComplainReceivedPage';
import MediatorsPage from './pages/AdminPages/MediatorsPage';
import UsersPage from './pages/AdminPages/UsersPage';
import NotariesPage from './pages/AdminPages/NotariesPage';
import VerificationPage from './pages/AdminPages/VerificationStatus_Info';
import VerificationStatusPage from './pages/AdminPages/VerificationStatusPage';
import AdminDashboardHome from './pages/AdminPages/AdminDashboardHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Admin Pages */}
      <Route path="/AdminDashboard/HomePage" element={<AdminDashboardHome />} />
      <Route path="/AdminDashboard/AdvocatesPage" element={<AdvocatePage />} />
      <Route path="/AdminDashboard/UsersPage" element={<UsersPage />} />
      <Route
        path="/AdminDashboard/All Legal Service ProvidersPage"
        element={<LegalServiceProviderPage />}
      />
      <Route
        path="/AdminDashboard/ArbitratorsPage"
        element={<ArbitratorsPage />}
      />
      <Route
        path="/AdminDashboard/Document WritersPage"
        element={<DocumentWritersPage />}
      />
      <Route path="/AdminDashboard/NotariesPage" element={<NotariesPage />} />
      <Route path="/AdminDashboard/MediatorsPage" element={<MediatorsPage />} />
      <Route
        path="/AdminDashboard/Complain RecievedPage"
        element={<ComplainReceivedPage />}
      />
      <Route
        path="/AdminDashboard/Verification StatusPage"
        element={<VerificationStatusPage />}
      />
    </Routes>
  );
}

export default App;
