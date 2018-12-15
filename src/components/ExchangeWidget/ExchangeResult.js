import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sharedStyles from './exchangeWidget.module.css';
import { getExchangeSum, getFromCurrency, getToCurrency, getRates } from './../../selectors';
import currencies from './../../constants/currencies';
import { convertGivenSumFromTo } from './../../utils/conversion';
import cn from 'classnames';

const getRatesHtml = (fromCurr, toCurr, rate) => {
  return (
    <Fragment>
      <span className={sharedStyles.small}>{currencies[fromCurr].symbol}</span>1 =
      <span className={sharedStyles.small}>{currencies[toCurr].symbol}</span>{rate}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    exchangeSum: getExchangeSum(state),
    fromCurrency: getFromCurrency(state),
    toCurrency: getToCurrency(state),
    rates: getRates(state)
  };
};

const ExchangeResult = (props) => {
  const { exchangeSum, fromCurrency, toCurrency, rates } = props;
  const sum = convertGivenSumFromTo(exchangeSum || 0)(rates[toCurrency])(rates[fromCurrency])
    .toFixed(2)
  ;
  const rateForUnit = convertGivenSumFromTo(1)(rates[toCurrency])(rates[fromCurrency])
    .toFixed(2)
  ;
  const headingClasses = cn({
    [sharedStyles.heading]: true,
    [sharedStyles.off]: !exchangeSum
  });

  return (
    <div className={sharedStyles.exchangeResult}>
      <span className={headingClasses}><span className={sharedStyles.sign}>+ </span>{ sum }</span>
      <small className={sharedStyles.label}>
        { getRatesHtml(fromCurrency, toCurrency, rateForUnit) }
      </small>
    </div>
  );
};

ExchangeResult.propsTypes = {
  exchangeSum: PropTypes.string,
  rate: PropTypes.string,
  fromCurrency: PropTypes.string,
  toCurrency: PropTypes.string
};

export default connect(mapStateToProps)(ExchangeResult);