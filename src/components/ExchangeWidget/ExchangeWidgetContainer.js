import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExchangeWidget from './ExchangeWidget';
import { updateRates } from './../../store/actions/thunks';
import { getRatesInBaseCurrency } from './selectors';

const mapStateToProps = (state) => {
  return {
    rates: getRatesInBaseCurrency(state)
  };
};

const mapDispatchToProps = {
  updateRates
};

class ExchangeWidgetContainer extends Component {
  interval = null;
  state = {
    updateInterval: 3000000
  };

  componentDidMount() {
    this.interval = setInterval(() => this.props.updateRates(), this.state.updateInterval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log('update props ', this.props.rates);
    return (
      <ExchangeWidget />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeWidgetContainer);