import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRates } from "../store/actions/thunks";
import { setCrucialError } from './../store/actions';
import { requestRecursively, abortSubscription } from "../utils/ratesRequestInterval";



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
      return <WrappedComponent />;
    }
  }

  return connect(null, mapDispatchToProps)(ExchangeFuncContainer);
};
