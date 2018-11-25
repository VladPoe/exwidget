import { countNewBalance } from "./../countNewBalance";
import userData from "../../constants/userData";
import {getToCurrency} from "../currencies";
import currencies from "../../constants/currencies";

const initBalance = {
  EUR: {
    symbol: currencies.EUR.code,
    amount: '10'
  },
  USD: {
    symbol: currencies.USD.code,
    amount: '20'
  },
  GBP: {
    symbol: currencies.GBP.code,
    amount: '25.55'
  },
  JPY: {
    symbol: currencies.JPY.code,
    amount: '40000.01'
  }
};

it('countNewBalance test', () => {
  expect(
    countNewBalance(initBalance, 'EUR', '10', 'USD', '1')
  ).toEqual({
    EUR: {
      symbol: currencies.EUR.code,
      amount: '0.00'
    },
    USD: {
      symbol: currencies.USD.code,
      amount: '21.00'
    },
    GBP: {
      symbol: currencies.GBP.code,
      amount: '25.55'
    },
    JPY: {
      symbol: currencies.JPY.code,
      amount: '40000.01'
    }
  });
  expect(
    countNewBalance(initBalance, 'GBP', '1.01', 'EUR', '100')
  ).toEqual({
    USD: {
      symbol: currencies.USD.code,
      amount: '20'
    },
    JPY: {
      symbol: currencies.JPY.code,
      amount: '40000.01'
    },
    GBP: {
      symbol: currencies.GBP.code,
      amount: '24.54'
    },
    EUR: {
      symbol: currencies.EUR.code,
      amount: '110.00'
    }
  });
});