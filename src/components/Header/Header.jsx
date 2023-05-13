import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.homeBg}>
      <div className={css.container}>
        <div className={css.header__items}>
          <div className={css.header__title}>
            <h1 className={css.logo}>Movie Database</h1>
          </div>
          <ul className={css.header__list}>
            <li className={css.position}>
              <NavLink to="/" className={css.header__link}>
                Home
              </NavLink>
            </li>
            <li className={css.position}>
              <NavLink to="movies" className={css.header__link}>
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
