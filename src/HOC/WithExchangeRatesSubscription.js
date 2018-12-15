import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRates } from "../store/actions/thunks";
import { setCrucialError } from './../store/actions';
import { isExchangeDataReady } from './../selectors';
import Preloader from './../components/Preloader/Preloader';
import { requestRecursively, abortSubscription } from "./../utils/RatesRequestInterval";


const mapStateToProps = (state) => {
  return {
    isExchangeDataReady: isExchangeDataReady(state)
  };
};

const mapDispatchToProps = {
  updateRates,
  setCrucialError
};

export default (WrappedComponent) => {
  class ExchangeFuncContainer extends Component {
    interval = { id: 0 };

    componentDidMount() {
      const ratesSubscription = requestRecursively(
        this.interval,
        this.props.updateRates,
        this.props.setCrucialError
      );
      ratesSubscription(1);
    };

    componentWillUnmount() {
      abortSubscription(this.interval);
    }

    render() {
      console.log(this.props.isExchangeDataReady);
      return this.props.isExchangeDataReady
        ? <WrappedComponent />
        : <Preloader />
      ;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(ExchangeFuncContainer);
};
