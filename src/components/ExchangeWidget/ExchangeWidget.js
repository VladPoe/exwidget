import React from 'react';
import styles from './exchangeWidget.module.css';
import CurrencyState from '../CurrencyState/CurrencyState';
import { IncomeSum } from "./utils";
import withExchangeData from './../../HOC/withExchangeData';

const FromCurrencyState = withExchangeData(CurrencyState, 'from');
const ToCurrencyState = withExchangeData(CurrencyState, 'to');

const ExchangeWidget = (props) => {
  return (
    <article className={styles.exchangeWidget}>
      <h1 className="visuallyhidden">Ex Widget</h1>
      <div className={styles.wrap}>
        <div className={styles.partConvertFrom}>
          <div className={styles.container}>
            <div className={styles.form}>
              <FromCurrencyState />
              {/*<CurrencyState currency="EUR"*/}
                             {/*balance="24.32"*/}
              {/*/>*/}
            </div>
          </div>
        </div>
        <div className={styles.partConvertTo}>
          <div className={styles.container}>
            <div className={styles.form}>
              <CurrencyState currency="USD"
                             balance="467.43"
              />
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