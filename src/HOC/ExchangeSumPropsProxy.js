import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExchangeSum } from '../selectors';
import actions from "../store/actions";
import { sumRegexp } from "./../utils/currencies";


const mapStateToProps = (state) => {
  return {
    exchangeSum: getExchangeSum(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSumChange: ({ target: { value } }) => {
      sumRegexp.test(value) && dispatch(actions.setExchangeSum(value))
    }
  }
};

export default (WrappedComponent) => {
  const ExchangeSumPropsProxy = (props) => {
    return <WrappedComponent value={props.exchangeSum} changeHandler={props.handleSumChange} />
  };
  return connect(mapStateToProps, mapDispatchToProps)(ExchangeSumPropsProxy)
};