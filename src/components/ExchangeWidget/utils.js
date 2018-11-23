import React from "react";
import currencies from './../../constants/currencies';
import styles from './exchangeWidget.module.css';

const createLabelMarkup = (fromCurr, toCurr, rate) => {
  return {
    __html: `<span class="${styles.small}">${currencies[fromCurr].symbol}</span>`
      + `1 = `
      + `<span class="${styles.small}">${currencies[toCurr].symbol}</span>`
      + `${rate}`
  };
};

export const IncomeSum = (props) => {
  return (
    <div className={styles.currencyStateElem}>
      <span className={styles.heading}>+{ props.amount }</span>
      <small className={`${styles.label} ${styles.labelRight}`}
             dangerouslySetInnerHTML={ createLabelMarkup(props.fromCurrency, props.toCurrency, props.rate) }
      />
    </div>
  );
};