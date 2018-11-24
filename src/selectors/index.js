import { createSelector } from 'reselect';
import { decimal, isLessOrEqual } from './../utils/decimal';

// const getRates = (state) => state.rates;
// const getBaseCurrency = (state) => state.user.mainCurrency;
//
// export const getRatesInBaseCurrency = createSelector(
//   [getBaseCurrency, getRates],
//   (baseCurrency, rates) => {
//     return getRatesBasedOn(baseCurrency, rates);
//   }
// );

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