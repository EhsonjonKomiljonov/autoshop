import React from 'react';
import { Link } from 'react-router-dom';
import './about.scss';

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <h2 className="text-center">
            Platformada turli sinflardagi avtomobillar, mototsikllar va
            <br />
            boshqa transport vositalari mavjud.
          </h2>
          <ul className="about_list d-flex align-items-baseline justify-content-between">
            <li>
              <h3 className="text-center text-white">MOTOTSIKLLAR</h3>
              <p className="text-white text-center mt-3">
                Platformada 2 va 3 g'ildirakli mototsikllar mavjud ularni
                vakansiyalar bo'limidan topishingiz mumkin.
              </p>
              <Link
                className="text-primary d-block mt-4 text-center"
                to="/main-vacancys"
              >
                VAKANSIYALAR
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </li>
            <li>
              <h3 className="text-center text-white">AVTOMOBILLAR</h3>
              <p className="text-white text-center mt-3">
                Platformada 100 xildan ortiq mashinalar to'plami bor ularni
                o'zingiz ham ko'rishingiz mumkin...
              </p>
              <Link
                className="text-primary d-block mt-4 text-center"
                to="/main-vacancys"
              >
                VAKANSIYALAR
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </li>
            <li>
              <h3 className="text-center text-white">YUK MASHINALARI</h3>
              <p className="text-white text-center mt-3">
                Siz Platformada hatto yuk mashina vakansiyalarini ham
                topishingiz mumkin...
              </p>
              <Link
                className="text-primary d-block mt-4 text-center"
                to="/main-vacancys"
              >
                VAKANSIYALAR
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
