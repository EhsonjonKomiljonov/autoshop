import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1>AutoShop - Sizning eng ishonchli platformangiz!</h1>
          <p>
            AutoShop platformasi 2015-yildan buyon o'z ish faoliyatini davom
            ettirmoqda. <br /> Bizning asosiy maqsadimiz, mijozlarimizga eng
            <br />
            ishonchli xizmatni ko'rsatishdir.
          </p>
          <Link to="/vacancy">
            <button class="glow-on-hover" type="button">
              VAKANSIYA JOYLASH
            </button>
          </Link>
        </div>
        <div className="hero__img"></div>
      </div>
    </section>
  );
};
