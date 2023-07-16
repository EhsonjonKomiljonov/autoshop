import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

export const Footer = () => {
  return (
    <footer className="site-footer py-5 bg-dark">
      <div className="container">
        <div className="site-footer__inner d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src={Logo} alt="AUTO SHOP" width="200" />
          </Link>
          <small className="text-white">© autoshop community</small>
          <ul className="nav__list d-flex align-items-center gap-5 list-unstyled m-0">
            <li>
              <Link
                to="/main-vacancys"
                className="text-white text-decoration-none fw-semibold"
              >
                VAKANSIYALAR
              </Link>
            </li>
            <li>
              <Link
                to="/vacancy"
                className="text-white text-decoration-none fw-semibold"
              >
                VAKANSIYA JOYLASH
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
