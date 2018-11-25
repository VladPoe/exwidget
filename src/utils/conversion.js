import {
  decimal,
  divide,
  multiply,
} from './decimal';

export const convertFromTo = (fromVal) => (toVal) => ( // both values must have the same base
  divide(decimal(fromVal))(toVal)
);

export const convertGivenSumFromTo = (sum) => (fromVal) => (toVal) => {
  return multiply(convertFromTo(fromVal)(toVal))(sum);
};

export const combRates = (newBase, rates) => {
  return Object.entries(rates).reduce((acc, [ curr, rate ]) => {
    return { ...acc, [curr]: convertFromTo(rate)(rates[newBase]).toFixed(4) }
  }, {});
};
