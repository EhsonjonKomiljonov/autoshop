import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { API } from '../../API/api';
import CarCard from '../CarCard/CarCard';
import { Header } from '../Header/Header';
import './MainVacancys.scss';

const MainVacancys = () => {
  const [data, setData] = useState([]);
  const { query } = useQuery('get-cars', API.mainVacancys, {
    onSuccess: (data) => {
      if (data.data) {
        setData(data.data);
      }
    },
    retry: 1,
    onError: (err) => console.log(err),
  });

  return (
    <>
      <Header />
      <section className='main_vacancys'>
        <div className='container'>
          <div className='main_vacancys_inner'>
            {data.map((el) => {
              return <CarCard obj={el} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainVacancys;
