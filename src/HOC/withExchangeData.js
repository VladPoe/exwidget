import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../store/actions';
import { currentBaseCurrency } from "../store/reducers/currentBaseCurrency";

const mapStateToProps = (state) => {
  return {
    currentBaseCurrency: state.currentBaseCurrency,
    rates: state.rates,
    exchange: state.exchange
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputSum: (value) => dispatch(actions.setExchangeSum(value)),
    changeFromCurrency: (currency) => dispatch(actions.setExchangeFromCurrency(currency)),
    changeToCurrency: (currency) => dispatch(actions.setExchangeToCurrency(currency))
  }
};

export default (WrappedComponent, type) => {
  class ExchangeDataPropsProxy extends Component {

    componentDidMount() {
      if (!this.props.exchange.fromCurrency) {
        this.props.changeFromCurrency(this.props.currentBaseCurrency);
      }
    }

    render() {
      console.log('from PP - ', this.props);
      const currency = type === 'from'
        ? this.props.exchange.fromCurrency
        : this.props.exchange.toCurrency;
      const balance = '334.43';
      return (
        <WrappedComponent currency={currency}
                          balance={balance}
                          {...this.props} />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(ExchangeDataPropsProxy)
};