import React from 'react';
import styles from './exchangeWidget.module.css';
import CurrencyState from './CurrencyState';
import ExchangeSum from './ExchangeSum';
import { IncomeSum } from "./utils";
import CurrencyStatePropsProxy from './../../HOC/CurrencyStatePropsPropxy';

const FromCurrencyState = CurrencyStatePropsProxy(CurrencyState, 'from');
const ToCurrencyState = CurrencyStatePropsProxy(CurrencyState, 'to');

const ExchangeWidget = (props) => {
  return (
    <article className={styles.exchangeWidget}>
      <h1 className="visuallyhidden">Ex Widget</h1>
      <div className={styles.wrap}>
        <div className={styles.partConvertFrom}>
          <div className={styles.container}>
            <div className={styles.form}>
              <FromCurrencyState />
              <ExchangeSum />
            </div>
          </div>
        </div>
        <div className={styles.partConvertTo}>
          <div className={styles.container}>
            <div className={styles.form}>
              <ToCurrencyState />
              <IncomeSum fromCurrency="GBP"
                         toCurrency="EUR"
                         rate="0.74"
                         amount="67.34"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExchangeWidget;