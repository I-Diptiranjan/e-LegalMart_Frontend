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

import Advocates_Info from './pages/AdminPages/Advocates_Info';
import LSPSidebar from './components/Sidebar/LSPSidebar';
import { CasesPage } from './pages/LSPPages/CasesPage';
import DashboardPage from './pages/LSPPages/DashboardPage';
import LSPComplainReceivedPage from './pages/LSPPages/ComplainReceivedPage';
import LSPHomePage from './pages/LSPPages/HomePage';
import LSPChat from './pages/LSPPages/Chat';
import LSPProfilePage from './pages/LSPPages/ProfilePage';
import UserSidebar from './components/Sidebar/UserSidebar';
import SubmitComplaintsPage from './pages/UsersPages/SubmitComplaintsPage';
import ListofComplaintsPage from './pages/UsersPages/ListofComplaintsPage';
import UserHomePage from './pages/UsersPages/HomePage';
import UserDashboardPage from './pages/UsersPages/DashboardPage';
import ChatPage from './pages/UsersPages/ChatPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      // {/* Admin Pages */}
      //{' '}
      {/* <Route path="/AdminDashboard/HomePage" element={<AdminDashboardHome />} />
    //   <Route path="/AdminDashboard/AdvocatesPage" element={<AdvocatePage />} />
    //   <Route path="/AdminDashboard/UsersPage" element={<UsersPage />} />
    //   <Route
    //     path="/AdminDashboard/All Legal Service ProvidersPage"
    //     element={<LegalServiceProviderPage />}
    //   />
    //   <Route
    //     path="/AdminDashboard/ArbitratorsPage"
    //     element={<ArbitratorsPage />}
    //   />
    //   <Route
    //     path="/AdminDashboard/Document WritersPage"
    //     element={<DocumentWritersPage />}
    //   />
    //   <Route path="/AdminDashboard/NotariesPage" element={<NotariesPage />} />
    //   <Route path="/AdminDashboard/MediatorsPage" element={<MediatorsPage />} />
    //   <Route
    //     path="/AdminDashboard/Complain RecievedPage"
    //     element={<ComplainReceivedPage />}
    //   />
    //   <Route
    //     path="/AdminDashboard/Verification StatusPage"
    //     element={<VerificationStatusPage />}
    //   /> */}
      // {/* {LSP Dashboard} */}
      //{' '}
      {/* <Route path="/LSPDashboard/CasesPage" element={<CasesPage />} />
    //   <Route path="/LSPDashboard/DashboardPage" element={<DashboardPage />} />
    //   <Route
    //     path="/LSPDashboard/Complain RecievedPage"
    //     element={<LSPComplainReceivedPage />}
    //   />
    //   <Route path="/LSPDashboard/HomePage" element={<LSPHomePage />} />
    //   <Route path="/LSPDashboard/ChatPage" element={<LSPChat />} />
    //   <Route path="/LSPDashboard/ProfilePage" element={<LSPProfilePage />} /> */}
      // {/* User Dashboard */}
      <Route path="/UserDashboard/HomePage" element={<UserHomePage />} />
      <Route
        path="/UserDashboard/DashboardPage"
        element={<UserDashboardPage />}
      />
      <Route path="/UserDashboard/ChatPage" element={<ChatPage />} />
      <Route path="/UserDashboard/ProfilePage" element={<LSPProfilePage />} />
      <Route
        path="/UserDashboard/File a ComplaintPage"
        element={<SubmitComplaintsPage />}
      />
      <Route
        path="/UserDashboard/List of ComplaintsPage"
        element={<ListofComplaintsPage />}
      />
    </Routes>
  );
}

export default App;
