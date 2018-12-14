import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExchangeWidget from './ExchangeWidget';
import { updateRates } from './../../store/actions/thunks';
import { RatesRequestInterval } from './../../store/actions/thunks';


const mapDispatchToProps = {
  updateRates
};

class ExchangeWidgetContainer extends Component {
  interval = new RatesRequestInterval();

  componentDidMount() {
    this.interval.requestRecursively()
  };

  componentWillUnmount() {
    this.interval.cancel();
  }

  render() {
    return (
      <ExchangeWidget />
    );
  }
}

export default connect(null, mapDispatchToProps)(ExchangeWidgetContainer);