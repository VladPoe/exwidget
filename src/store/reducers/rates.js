import actions from './../actions';
import { handleActions } from 'redux-actions';

export const rates = handleActions({
  [actions.setRates]: (state, { payload: rates }) => {
    return rates
  }
}, null);