import React from 'react';
import styles from './exchangeWidget.module.css';
import { connect } from 'react-redux';
import {getExchangeSum, getExchangeSumAvailability } from './../../selectors';
import { isLessOrEqual, decimal } from './../../utils/decimal';

const mapStateToProps = (state) => {
  return {
    exchangeSum: getExchangeSum(state),
    isAvailable: getExchangeSumAvailability(state)
  };
};

const ExchangeBtn = (props) => {
  const disabled = !props.isAvailable
    || isLessOrEqual(decimal(props.exchangeSum || 0))(0);

  return (
    <button className={styles.exchangeBtn}
            type="button"
            disabled={disabled}
    >
      Exchange
    </button>
  );
};

export default connect(mapStateToProps)(ExchangeBtn);