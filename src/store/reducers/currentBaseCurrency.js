import actions from './../actions';
import { handleActions } from 'redux-actions';

export const currentBaseCurrency = handleActions({
  [actions.setCurrentBaseCurrency]: (state, { payload: currCode }) => {
    return currCode
  }
}, 'USD');