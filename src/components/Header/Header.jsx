import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <header class="py-3">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src={Logo} alt="AUTO SHOP" width="150" />
          </Link>
          <nav>
            <ul class="list-unstyled m-0">
              <li>
                <Link to="/" class="text-dark text-decoration-none fw-semibold">
                  Vakansiya joylash
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
