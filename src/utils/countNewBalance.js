import { decimal, add, subtract } from './decimal';

export const countNewBalance = (initialBalance, fromCurr, fromSum, toCurr, toSum) => {
  return {
    ...initialBalance,
    [fromCurr]: {
      symbol: fromCurr,
      amount: subtract(decimal(initialBalance[fromCurr].amount))(fromSum).toFixed(2)
    },
    [toCurr]: {
      symbol: toCurr,
      amount: add(decimal(initialBalance[toCurr].amount))(toSum).toFixed(2)
    }
  };
};