import React, { StrictMode } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Signup from './pages/LegalSignup/Signup';
import Signin from './pages/LegalLogin.jsx/Signin';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import UserSignup from './pages/UserSignup/UserSIgnup';
import SignupChoice from './pages/SignUpChoice/SignupChoice';
import LegalServiceProviderChoice from './pages/LegalServiceProviderChoice/LegalServiceProviderChoice';
import LegalServiceProviderList from './pages/LegalServiceProviderList/LegalServiceProviderList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupChoice />} />
      <Route path="/legalSignup" element={<Signup />} />
      <Route path="/legalSignin" element={<Signin />} />
      <Route path="/userSignup" element={<UserSignup />} />
      <Route
        path="/legalServiceProviderChoice"
        element={<LegalServiceProviderChoice />}
      />
      <Route
        path="/legalServiceProviderList"
        element={<LegalServiceProviderList />}
      />
    </Routes>
  );
}

export default App;
