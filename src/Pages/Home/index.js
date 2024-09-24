import React from 'react';
import './style.scss';
import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import Qualifications from '../../Components/Qualifiations';
import Skills from '../../Components/Skills';
import MyServices from '../../Components/Services';
import Footer from '../../Components/Footer';

const Home = () => {
  return (
    <>
      
      <Header />
      <Hero />
      <Skills />
      <MyServices />
      <Qualifications />
      <Footer />
    </>
  )
}

export default Home