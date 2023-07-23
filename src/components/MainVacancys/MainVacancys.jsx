import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { API } from '../../API/api';
import CarCard from '../CarCard/CarCard';
import { Header } from '../Header/Header';
import './MainVacancys.scss';

const MainVacancys = () => {
  const [selectSort, setSelectSort] = useState([]);
  const [inputSort, setInputSort] = useState([]);

  const onChangeSelect = async (evt) => {
    const data = await API.categorySelect(evt.target.value);
    setSelectSort(data.data);
  };

  const inputSortOn = async (evt) => {
    const data = await API.inputSearch(evt.target.value);
    setInputSort(data.data);
    console.log(inputSort);
  };

  const { data } = useQuery('get-cars', API.mainVacancys, {
    onSuccess: (data) => {},
    retry: 1,
    onError: (err) => console.log(err),
  });

  return (
    <>
      <Header />
      <section className='main_vacancys'>
        <div className='container'>
          <form className='sort_form'>
            <input
              onChange={inputSortOn}
              type='text'
            />
            <select
              onChange={onChangeSelect}
              name='sort_category'
            >
              <option value='CHEVROLET'>CHEVROLET</option>
              <option value='DAEWOO'>DAEWOO</option>
              <option value='LEXUS'>LEXUS</option>
              <option value='TOYOTA'>TOYOTA</option>
              <option value='BMW'>BMW</option>
              <option value='NISSAN'>NISSAN</option>
              <option value='AUDI'>AUDI</option>
              <option value='HONDA'>HONDA</option>
              <option value='FORD'>FORD</option>
              <option value='MERCEDES-BENZ'>MERCEDES-BENZ</option>
              <option value='KIA'>KIA</option>
              <option value='HYUNDAI'>HYUNDAI</option>
              <option value='LADA'>LADA</option>
              <option value='MAZDA'>MAZDA</option>
              <option value='MITSUBISHI'>MITSUBISHI</option>
              <option value='RENAULT'>RENAULT</option>
              <option value='SKODA'>SKODA</option>
              <option value='VOLKSWEGEN'>VOLKSWEGEN</option>
              <option value='SUBARU'>SUBARU</option>
              <option value='TESLA'>TESLA</option>
              <option value='JEEP'>JEEP</option>
              <option value='CADILLAC'>CADILLAC</option>
              <option value='DODGE'>DODGE</option>
              <option value='ГАЗ'>ГАЗ</option>
              <option value='PORSCHE'>PORSCHE</option>
              <option value='OPEL'>OPEL</option>
              <option value='GENESiS'>GENESiS</option>
              <option value='DS'>DS</option>
              <option value='Ferrari'>Ferrari</option>
              <option value='ALFA ROMEO'>ALFA ROMEO</option>
              <option value='ASTON MARTIN'>ASTON MARTIN</option>
            </select>
          </form>
          <div className='main_vacancys_inner'>
            {inputSort.length
              ? inputSort.map((el) => {
                  return (
                    <CarCard
                      key={el.id}
                      obj={el}
                    />
                  );
                })
              : selectSort.length
              ? selectSort.map((el) => {
                  return (
                    <CarCard
                      key={el.id}
                      obj={el}
                    />
                  );
                })
              : data?.data?.map((el) => {
                  return (
                    <CarCard
                      key={el.id}
                      obj={el}
                    />
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainVacancys;
