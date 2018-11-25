import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFromCurrency, getToCurrency, getUserBalance} from '../selectors';
import actions from "../store/actions";
import { getToCurrency as getNextToCurrency } from "./../utils/currencies";


const mapStateToProps = (state) => {
  return {
    fromCurrency: getFromCurrency(state),
    toCurrency: getToCurrency(state),
    userCurrencies: getUserBalance(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFormCurrency: (currency) => {
      dispatch(actions.setExchangeFromCurrency(currency));
    },
    changeToCurrency: (currency) => {
      dispatch(actions.setExchangeToCurrency(currency));
    }
  }
};

export default (WrappedComponent, type) => {

  class ExchangeNavigationPropsProxy extends Component {

    componentDidUpdate() {
        if (this.props.fromCurrency === this.props.toCurrency) {
          this.props.changeToCurrency(
            getNextToCurrency(this.props.fromCurrency, this.props.userCurrencies)
          );
        }
    }

    render() {
      return (
        <WrappedComponent changeCurrencyHandler={ type === 'from'
                            ? this.props.changeFormCurrency
                            : this.props.changeToCurrency }
                          userCurrencies={this.props.userCurrencies}
                          currentCurrency={ type === 'from'
                            ? this.props.fromCurrency
                            : this.props.toCurrency }

        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(ExchangeNavigationPropsProxy)
};