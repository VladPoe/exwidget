import React from 'react';
import styles from './exchangeWidget.module.css';
import CurrencyState from './CurrencyState';
import ExchangeSum from './ExchangeSum';
import CurrencyStatePropsProxy from './../../HOC/CurrencyStatePropsPropxy';
import ExchangeNavigationPropsProxy from './../../HOC/ExchangeNavigationPropsProxy';
import ExchangeResult from './ExchangeResult';
import Navigation from './../Navigation';
import ExchangeBtn from './ExchangeBtn';

const FromCurrencyState = CurrencyStatePropsProxy(CurrencyState, 'from');
const ToCurrencyState = CurrencyStatePropsProxy(CurrencyState, 'to');
const FromNavigation = ExchangeNavigationPropsProxy(Navigation, 'from');
const ToNavigation = ExchangeNavigationPropsProxy(Navigation, 'to');

const ExchangeWidget = () => {
  return (
    <article className={styles.exchangeWidget}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className="visuallyhidden">Ex Widget</h1>
          <div className={styles.container}>
            <ExchangeBtn />
          </div>
        </header>
        <div className={styles.partConvertFrom}>
          <div className={styles.container}>
            <div className={styles.form}>
              <FromCurrencyState />
              <ExchangeSum />
            </div>
          </div>
          <div className={styles.navWrap}>
            <FromNavigation />
          </div>
        </div>
        <div className={styles.partConvertTo}>
          <div className={styles.container}>
            <div className={styles.form}>
              <ToCurrencyState />
              <ExchangeResult />
            </div>
          </div>
          <div className={styles.navWrap}>
            <ToNavigation />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExchangeWidget;