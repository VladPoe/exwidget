import Big from 'big.js';


export const decimal = (val) => Big(val);

export const add = (decimal) => (val) => decimal.plus(val);

export const subtract = (decimal) => (val) => decimal.minus(val);

export const divide = (decimal) => (divider) => decimal.div(divider);

export const multiply = (decimal) => (times) => decimal.times(times);

export const isLessOrEqual = (decimal) => (val) => decimal.lte(val);
