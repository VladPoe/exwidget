import { createSelector } from 'reselect';
import { decimal, isLessOrEqual } from './../utils/decimal';

export const getAppWorkStatus = (state) => state.appStatus.works;
export const getAppErrorMessage = (state) => state.appStatus.errorMessage;

export const getFromCurrency = (state) => state.exchange.fromCurrency;
export const getToCurrency = (state) => state.exchange.toCurrency;
export const getUserBalance = (state) => state.user.account;
export const getExchangeState = (state) => state.exchange;
export const getExchangeSum = (state) => state.exchange.sum;
export const getMaxSumAvailable = (state) => {
  return state.user.account[state.exchange.fromCurrency].amount;
};
export const getExchangeSumAvailability = createSelector(
  [getExchangeSum, getMaxSumAvailable],
  (exchangeSum, max) => {
    return isLessOrEqual(decimal(exchangeSum || 0))(max)
  }
);
export const getRates = (state) => state.rates.rates;
export const getScreenPreloadingStatus = (state) => state.ui.preloaderBlock.isActive;
export const getScreenPreloadingMessage = (state) => state.ui.preloaderBlock.message;