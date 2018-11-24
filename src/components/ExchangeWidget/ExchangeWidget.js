import React from 'react';
import styles from './exchangeWidget.module.css';
import CurrencyState from './CurrencyState';
import ExchangeSum from './ExchangeSum';
import { IncomeSum } from "./utils";
import CurrencyStatePropsProxy from './../../HOC/CurrencyStatePropsPropxy';
import ExchangeSumPropsProxy from './../../HOC/ExchangeSumPropsProxy';

const FromCurrencyState = CurrencyStatePropsProxy(CurrencyState, 'from');
const ToCurrencyState = CurrencyStatePropsProxy(CurrencyState, 'to');
const ExchangeSumWithProps = ExchangeSumPropsProxy(ExchangeSum);

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
              {/*<ExchangeSumWithProps />*/}
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