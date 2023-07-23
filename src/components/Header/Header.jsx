import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import './header.scss';

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      if (scrollY > lastScrollY && scrollY > 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        transform: scroll ? 'translateY(-110%)' : 'translateY(0)',
        transition: 'all .3s ease',
        boxShadow: '5px 10px 10px 10px #0000005f'
      }}
      className="py-4 position-fixed z-3 top-0 w-100 bg-dark"
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src={Logo} alt="AUTO SHOP" width="150" />
          </Link>
          <nav className="nav">
            <ul className="nav__list d-flex align-items-center gap-5 list-unstyled m-0">
              <li>
                <NavLink
                  to="/"
                  className="text-white text-decoration-none fw-semibold"
                  style={({ isActive }) =>
                    isActive ? { borderBottom: '2px solid #ba1621' } : {}
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/main-vacancys"
                  className="text-white text-decoration-none fw-semibold"
                  style={({ isActive }) =>
                    isActive ? { borderBottom: '2px solid #ba1621' } : {}
                  }
                >
                  VAKANSIYALAR
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-vacancys"
                  className="text-white text-decoration-none fw-semibold"
                  style={({ isActive }) =>
                    isActive ? { borderBottom: '2px solid #ba1621' } : {}
                  }
                >
                  VAKANSIYALARIM
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vacancy"
                  className="text-white text-decoration-none fw-semibold"
                  style={({ isActive }) =>
                    isActive ? { borderBottom: '2px solid #ba1621' } : {}
                  }
                >
                  VAKANSIYA JOYLASH
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
