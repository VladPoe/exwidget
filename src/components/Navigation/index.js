import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation.module.css';
import cn from 'classnames';
import { uniqueId } from 'lodash';

const Navigation = (props) => {
  const { userCurrencies, currentCurrency, changeCurrencyHandler } = props;

  const clickHandler = (currency) => () => {
    changeCurrencyHandler(currency);
  };
  return (
    <nav className={styles.elem}>
      <ul className={styles.list}>
        {
          Object.keys(userCurrencies).map(currCode => (
            <li className={styles.item} key={uniqueId()}>
              <button className={cn({
                        [styles.btn]: true,
                        [styles.active]: currCode === currentCurrency
                      })}
                      type="button"
                      title={currCode}
                      onClick={clickHandler(currCode)}
              />
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  userCurrencies: PropTypes.object,
  currentCurrency: PropTypes.string,
  changeCurrencyHandler: PropTypes.func
};

export default Navigation;