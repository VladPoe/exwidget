import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExchangeWidget from './ExchangeWidget';
import { updateRates } from './../../store/actions/thunks';
import { getRatesBasedOn, convertFromTo } from './../../utils/conversion';
import {decimal, divide} from "../../utils/decimal";


const foo = () => {
  console.log(convertFromTo(1)(2));

};



const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {
  updateRates
};

class ExchangeWidgetContainer extends Component {
  interval = null;
  state = {
    updateInterval: 8000
  };

  componentDidMount() {
    // this.interval = setInterval(() => this.props.updateRates(), this.state.updateInterval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    foo();

    return (
      <ExchangeWidget />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeWidgetContainer);