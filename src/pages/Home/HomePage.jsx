import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import AchieversPage from '../AchieversPage/AchieversPage';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AchieversPage />
      <Footer />
    </>
  );
};

export default HomePage;
