import Big from 'big.js';

export const FIX_AFTER_POINT = 2;

export const decimal = (val) => Big(val);

export const add = (decimal) => (val) => decimal.plus(val).toFixed(FIX_AFTER_POINT);

export const subtract = (decimal) => (val) => decimal.minus(val).toFixed(FIX_AFTER_POINT);

export const divide = (decimal) => (divider) => decimal.div(divider).toFixed(FIX_AFTER_POINT);

export const multiply = (decimal) => (times) => decimal.times(times).toFixed(FIX_AFTER_POINT);

export const isEqual = (decimal) => (val) => decimal.eq(val).toFixed(FIX_AFTER_POINT);

export const decimalToString = (decimal) => decimal.toString().toFixed(FIX_AFTER_POINT);