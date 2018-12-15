import { createSelector } from 'reselect';
import { decimal, isLessOrEqual } from './../utils/decimal';
import { get } from 'lodash';

export const getAppWorkStatus = (state) => get(state.appStatus, 'works');
export const getAppErrorMessage = (state) => get(state.appStatus, 'errorMessage');

export const isExchangeDataReady = (state) => !!(
  get(state, 'rates') && get(state, 'user')
);

export const getFromCurrency = (state) => get(state.exchange, 'fromCurrency');
export const getToCurrency = (state) => get(state.exchange, 'toCurrency');
export const getUserBalance = (state) => get(state.user, 'account');
export const getExchangeState = (state) => get(state, 'exchange');
export const getExchangeSum = (state) => get(state.exchange, 'sum');
export const getMaxSumAvailable = (state) => {
  return state.user.account[state.exchange.fromCurrency].amount;
};
export const getExchangeSumAvailability = createSelector(
  [getExchangeSum, getMaxSumAvailable],
  (exchangeSum, max) => {
    return isLessOrEqual(decimal(exchangeSum || 0))(max)
  }
);
export const getRates = (state) => get(state.rates, 'rates');
export const getScreenPreloadingStatus = (state) => get(state.ui.preloaderBlock, 'isActive');
export const getScreenPreloadingMessage = (state) => get(state.ui.preloaderBlock, 'message');