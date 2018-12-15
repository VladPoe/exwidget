import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sharedStyles from './exchangeWidget.module.css';
import { getExchangeSum, getMaxSumAvailable, getExchangeSumAvailability } from './../../selectors';
import actions from './../../store/actions';
import { sumRegexp } from './../../utils/currencies';
import cn from 'classnames';

const inputId='sum';

const mapStateToProps = (state) => {
  return {
    exchangeSum: getExchangeSum(state),
    max: getMaxSumAvailable(state),
    isAvailable: getExchangeSumAvailability(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSum: (value) => {
      dispatch(actions.setExchangeSum(value))
    }
  }
};

class ExchangeSum extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleSumChange = ({ target: { value } }) => {
    sumRegexp.test(value) && this.props.dispatchSum(value);
  };

  render() {
    const labelClassNames = cn({
      [sharedStyles.label]: true,
      [sharedStyles.inputTip]: true,
      [sharedStyles.on]: !this.props.exchangeSum || (this.props.exchangeSum && !this.props.isAvailable)
    });

    const labelText = !this.props.exchangeSum
      ? 'type the sum'
      : !this.props.isAvailable
        ? 'overbalanced' : '';

    return (
      <div className={`${sharedStyles.sumInputWrap} ${sharedStyles.heading}`}
           data-value={this.props.exchangeSum}
      >
        { this.props.exchangeSum && <span className={sharedStyles.sign}>— </span> }
        <input className={sharedStyles.sumInput}
               type="text"
               id={inputId}
               value={this.props.exchangeSum}
               name="exchange-sum"
               onChange={this.handleSumChange}
               ref={this.inputRef}
        />
        <label htmlFor={inputId}
               className={labelClassNames}
        >
          { labelText }
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