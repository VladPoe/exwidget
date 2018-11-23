import { createSelector } from 'reselect';
import { getRatesBasedOn } from "../utils/conversion";

const getRates = (state) => state.rates;
const getBaseCurrency = (state) => state.currentBaseCurrency;

export const getRatesInBaseCurrency = createSelector(
  [getBaseCurrency, getRates],
  (baseCurrency, rates) => {
    return getRatesBasedOn(baseCurrency, rates);
  }
);