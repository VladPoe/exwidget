import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sharedStyles from './exchangeWidget.module.css';
import { getExchangeSum } from './../../selectors';
import actions from './../../store/actions';
import { sumRegexp } from './../../utils/currencies';

var inputId='sum';

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

class ExchangeSum extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className={`${sharedStyles.sumInputWrap} ${sharedStyles.heading}`}
           data-value={this.props.exchangeSum}
      >
        { this.props.exchangeSum && '— ' }
        <input className={sharedStyles.sumInput}
               type="text"
               id={inputId}
               value={this.props.exchangeSum}
               name="exchange-sum"
               onChange={this.props.handleSumChange}
               ref={this.inputRef}
        />
        <label htmlFor={inputId}
               className={`${sharedStyles.label}
                           ${sharedStyles.inputTip}
                           ${this.props.exchangeSum && sharedStyles.off}`}
        >
          type the sum
        </label>
      </div>
    );
  }
}

ExchangeSum.propsTypes = {
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeSum);