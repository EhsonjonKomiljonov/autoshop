import React from 'react';
import { About } from '../../components/About/About';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';

export const Home = () => {
  document.body.classList.remove("p-0")
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
};
