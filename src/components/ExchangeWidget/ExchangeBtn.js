import React from 'react';
import PropTypes from 'prop-types';
import styles from './exchangeWidget.module.css';
import { connect } from 'react-redux';
import {
  getExchangeSum,
  getExchangeSumAvailability
} from './../../selectors';
import { isLessOrEqual, decimal } from './../../utils/decimal';
import { updateBalance } from './../../store/actions/thunks';

const mapStateToProps = (state) => {
  return {
    exchangeSum: getExchangeSum(state),
    isAvailable: getExchangeSumAvailability(state)
  };
};

const mapDispatchToProps = {
  updateBalance
};

const ExchangeBtn = (props) => {
  const disabled = !props.isAvailable
    || isLessOrEqual(decimal(props.exchangeSum || 0))(0);

  return (
    <button className={styles.exchangeBtn}
            type="button"
            disabled={disabled}
            onClick={props.updateBalance}
    >
      Exchange
    </button>
  );
};

ExchangeBtn.propTypes = {
  clickHandler: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeBtn);