import React from 'react';
import './style.scss';
import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import Qualifications from '../../Components/Qualifiations';
import Skills from '../../Components/Skills';
import MyServices from '../../Components/Services';

const Home = () => {
  return (
    <>
      
      <Header />
      <Hero />
      <Skills />
      <MyServices />
      <Qualifications />
    </>
  )
}

export default Home