import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExchangeWidget from './ExchangeWidget';
import { updateRates } from './../../store/actions/thunks';


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  updateRates
};

class ExchangeWidgetContainer extends Component {
  interval = null;
  state = {
    updateInterval: 3000000,
  };

  componentDidMount() {
    this.props.updateRates();
    this.interval = setInterval(() => this.props.updateRates(), this.state.updateInterval);
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

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeWidgetContainer);