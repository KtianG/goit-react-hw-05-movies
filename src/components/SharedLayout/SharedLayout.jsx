import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.App}>
      <Header />
      <div className={css.container}>
        <Outlet />
      </div>
    </div>
  );
};
