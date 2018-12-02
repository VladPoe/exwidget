import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExchangeWidget from './ExchangeWidget';
import { updateRates } from './../../store/actions/thunks';


const UPDATE_RATES_INTERVAL = 300000;

const mapDispatchToProps = {
  updateRates
};

class ExchangeWidgetContainer extends Component {
  interval = null;

  componentDidMount() {
    this.props.updateRates();

    this.interval = setInterval(() => this.props.updateRates(), UPDATE_RATES_INTERVAL);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <ExchangeWidget />
    );
  }
}

export default connect(null, mapDispatchToProps)(ExchangeWidgetContainer);