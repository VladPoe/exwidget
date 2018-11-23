import {
  decimal,
  add,
  subtract,
  divide,
  multiply,
  isEqual,
  decimalToString
} from './decimal';

export const convertFromTo = (fromVal) => (toVal) => ( // both values must have the same base
  divide(decimal(fromVal))(toVal)
);

export const combRates = (newBase, rates) => {
  return Object.entries(rates).reduce((acc, [ curr, rate ]) => {
    return { ...acc, [curr]: convertFromTo(rate)(rates[newBase]) }
  }, {});
};

export const getRatesBasedOn = (newBase, prevBaseRates) => {
  const { base, rates, ...rest } = prevBaseRates;
  return {
    base: newBase,
    rates: combRates(newBase, rates),
    ...rest
  }
};
