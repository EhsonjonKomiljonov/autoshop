import React, { useContext } from 'react';
import { About } from '../../components/About/About';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { useQuery } from 'react-query';
import { API } from '../../API/api';
import { UserContext } from '../../context/UserContext';

export const Home = () => {
  document.body.classList.remove('p-0');

  const { setUserData } = useContext(UserContext);

  const { data, isError } = useQuery('get-user', API.getUser);

  if (isError) console.log(isError);

  if (data) setUserData(data.data.at(-1));

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
};
