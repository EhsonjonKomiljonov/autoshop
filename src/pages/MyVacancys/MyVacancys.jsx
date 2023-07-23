import React, { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard/CarCard';
import { API } from '../../API/api';
import { Header } from '../../components/Header/Header';
import './my-vacancys.scss';
import { toast, ToastContainer } from 'react-toastify';

export const MyVacancys = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [vacansysData, setVacansysData] = useState([]);

  const getVacancys = async () => {
    const data = await API.getUserCars(user[0].id).catch((err) =>
      console.log(err)
    );
    setVacansysData(data.data);
  };

  useEffect(() => {
    getVacancys();
  }, []);

  const deletedVacancy = async (evt) => {
    const data = await API.deleteVacancy(evt.target.id).catch((err) =>
      console.log(err)
    );

    if(data.data) {
      toast.error("O'chirildi!")
      getVacancys()
    }
  };

  return (
    <>
      <Header />
      <section className="my-vacancys">
        <div className="container py-5 d-flex align-items-center justify-content-between flex-wrap">
          {vacansysData.length ? (
            vacansysData.map((item) => {
              return (
                <div key={item.id}>
                  <CarCard
                    obj={item}
                    DeleteBtn={
                      <button
                        onClick={(evt) => deletedVacancy(evt)}
                        id={item.id}
                        className="btn btn-danger text-end"
                      >
                        DELETE
                      </button>
                    }
                  />
                </div>
              );
            })
          ) : (
            <h1 
              className="text-center w-100 my-5 py-5 text-info"
            >
              Hali vakansiyalar yo'q
            </h1>
          )}
        </div>
      </section>
    </>
  );
};
