import { createSelector } from 'reselect';
import { getRatesBasedOn } from "../utils/conversion";

const getRates = (state) => state.rates;
const getBaseCurrency = (state) => state.user.mainCurrency;

export const getRatesInBaseCurrency = createSelector(
  [getBaseCurrency, getRates],
  (baseCurrency, rates) => {
    return getRatesBasedOn(baseCurrency, rates);
  }
);

export const getUserBalance = (state) => state.user.account;
export const getExchangeState = (state) => state.exchange;
export const getExchangeSum = (state) => state.exchange.sum;