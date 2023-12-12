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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Admin Pages */}
      <Route path="/AdvocatesPage" element={<AdvocatePage />} />
      <Route path="/UsersPage" element={<UsersPage />} />
      <Route
        path="/All Legal Service ProvidersPage"
        element={<LegalServiceProviderPage />}
      />
      <Route path="/ArbitratorsPage" element={<ArbitratorsPage />} />
      <Route path="/Document WritersPage" element={<DocumentWritersPage />} />
      <Route path="/NotariesPage" element={<NotariesPage />} />
      <Route path="/MediatorsPage" element={<MediatorsPage />} />
      <Route path="/Complain RecievedPage" element={<ComplainReceivedPage />} />
      <Route
        path="/Verification StatusPage"
        element={<VerificationStatusPage />}
      />
    </Routes>
  );
}

export default App;
