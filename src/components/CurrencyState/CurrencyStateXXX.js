import React from 'react';
import PropTypes from 'prop-types';
import sharedStyles from './../ExchangeWidget/exchangeWidget.module.css';
import currencies from './../../constants/currencies';

const getBalance = (currCode, balance) => {
  const symbol = currencies[currCode].symbol;
  return {
    __html: `You have <span class="${sharedStyles.small}">${symbol}</span>${balance}`
  };
};

const CurrencyState = (props) => {
  return (
    <div className={sharedStyles.currencyStateElem}>
      <span className={sharedStyles.heading}>{ props.currency }</span>
      <small className={sharedStyles.label} dangerouslySetInnerHTML={getBalance(props.currency, props.balance)} />
    </div>
  );
};

CurrencyState.propsTypes = {
  currency: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired
};

export default CurrencyState;