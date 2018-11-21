import actions from './../actions';
import { handleActions } from 'redux-actions';
import { store } from './../index';

export const rates = handleActions({
  [actions.setRates]: (state, { payload: rates }) => {
    return rates
  }
}, null);