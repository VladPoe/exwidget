import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import ROUTES from './../../constants/routes';
import Logo from './../Logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Link to={ROUTES.INDEX}>
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;