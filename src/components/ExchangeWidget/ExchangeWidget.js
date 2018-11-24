import React from 'react';
import styles from './exchangeWidget.module.css';
import CurrencyState from './CurrencyState';
import ExchangeSum from './ExchangeSum';
import { IncomeSum } from "./utils";
import CurrencyStatePropsProxy from './../../HOC/CurrencyStatePropsPropxy';
import ExchangeResult from './ExchangeResult';

import { Sum } from './../../utils/decimal';


const FromCurrencyState = CurrencyStatePropsProxy(CurrencyState, 'from');
const ToCurrencyState = CurrencyStatePropsProxy(CurrencyState, 'to');



const ExchangeWidget = () => {
  const x = new Sum(2, 'EUR');
  x.add(13);
  console.log(x.amount, x.currency);
  x.convertTo('USD', 2, 1);
  console.log(x.amount, x.currency);

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
              <ExchangeResult />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExchangeWidget;