import actions from './../actions';
import { handleActions } from 'redux-actions';

export const user = handleActions({
  [actions.setUserData]: (state, { payload: userData }) => {
    return userData
  },
	[actions.setUserCurrency]: (state, { payload: currencyCode }) => {
  	return { ...state, mainCurrency: currencyCode }
	}
}, null);