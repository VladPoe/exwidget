import React from 'react';
import { connect } from 'react-redux';
import ExchangeWidget from './ExchangeWidget';
import WithExchangeRatesSubscription from './../../HOC/WithExchangeRatesSubscription';
import Preloader from './../Preloader/Preloader';
import { isExchangeDataReady } from "./../../selectors";


const mapStateToProps = (state) => {
  return {
    isDataReady: isExchangeDataReady(state)
  }
};

const ExchangeWidgetContainer = (props) => {
  return props.isDataReady
    ? <ExchangeWidget />
    : <Preloader />
};

export default WithExchangeRatesSubscription(connect(mapStateToProps)(ExchangeWidgetContainer));