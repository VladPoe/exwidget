import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserBalance, getExchangeState } from '../selectors';


const mapStateToProps = (state) => {
  return {
    userAccount: getUserBalance(state),
    exchange: getExchangeState(state)
  };
};

export default (WrappedComponent, type) => {
  class CurrencyStatePropsProxy extends Component {

    render() {
      const currency = ((type) => {
        switch (type) {
          case 'from':
            return this.props.exchange.fromCurrency;
          case 'to':
            return this.props.exchange.toCurrency;
          default:
            console.error('An error occurred. Please check CurrencyStatePropsProxy function to clarify');
            return false;
        }
      })(type);
      return (
        currency
          ? <WrappedComponent currency={currency}
                              balance={this.props.userAccount[currency].amount}
          />
          : <span>n/d</span>
      )
      ;
    }
  }

  return connect(mapStateToProps)(CurrencyStatePropsProxy)
};