import React from 'react';
import './style.scss';
import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import Qualifications from '../../Components/Qualifiations';
import Skills from '../../Components/Skills';
import MyServices from '../../Components/Services';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

const Home = () => {
  return (
    <>
      <div className='page-wrapper'>
      <Navbar />
      <Header />
    </div>
      <Hero />
      <Skills />
      <MyServices />
      <Qualifications />
      <Footer />
    </>
  )
}

export default Home