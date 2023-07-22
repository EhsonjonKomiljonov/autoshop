import React from 'react';
import { API } from '../../API/api';
import CarCard from '../CarCard/CarCard';
import { Header } from '../Header/Header';
import './MainVacancys.scss';

const MainVacancys = () => {
  const { mutate } = useMutation('signup-users', API.signUp, {
    onSuccess: (data) => {
      if (data.data) {
        setToken(data.data);

        navigate('/');
      }
    },
    onError: (err) => console.log(err),
  });

  const onSubmit = (values) => {
    const formData = new FormData();

    formData.append('firstName', values.firstName);
    formData.append('lastName', values.lastName);
    formData.append('phoneNumber', values.phoneNumber);
    formData.append('region', values.region);
    formData.append('passwordHash', values.passwordHash);

    mutate(formData);
  };

  return (
    <>
      <Header />
      <section className='main_vacancys'>
        <div className='container'>
          <div className='main_vacancys_inner'>
            <CarCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainVacancys;
