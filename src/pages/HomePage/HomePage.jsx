import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainContent from '../components/MainContent/MainContent';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
