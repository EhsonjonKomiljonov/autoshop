import React from 'react';
import CarCard from '../CarCard/CarCard';
import { Header } from '../Header/Header';
import './MainVacancys.scss';
const MainVacancys = () => {
  return (
    <>
      <Header />
      <section className='main_vacancys'>
        <div className='container'>
          <div className='main_vacancys_inner'>
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainVacancys;
