import actions from './../actions';
import { handleActions } from 'redux-actions';

export const exchange = handleActions({
  [actions.setExchangeFromCurrency]: (state, { payload: currCode }) => {
    return { ...state, fromCurrency: currCode }
  },
  [actions.setExchangeToCurrency]: (state, { payload: currCode }) => {
    return { ...state, toCurrency: currCode }
  },
  [actions.setExchangeSum]: (state, { payload: value }) => {
    return { ...state, sum: value }
  }
}, {
  fromCurrency: '',
  toCurrency: '',
  sum: ''
});