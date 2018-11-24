import currencies from './currencies';

export default {
  name: 'Vlad',
  surname: 'Pocheptcov',
  mainCurrency: currencies.USD.code,
  account: {
    EUR: {
      symbol: currencies.EUR.code,
      amount: '2100'
    },
    USD: {
      symbol: currencies.USD.code,
      amount: '4623.05'
    },
    GBP: {
      symbol: currencies.GBP.code,
      amount: '4319.49'
    },
    JPY: {
      symbol: currencies.JPY.code,
      amount: '35123.48'
    }
  }
};
