import currencies from './currencies';
import { decimal } from '../utils/decimal'

export default {
  name: 'Vlad',
  surname: 'Pocheptcov',
  mainCurrency: currencies.USD.code,
  account: {
    EUR: {
      symbol: currencies.EUR.code,
      amount: decimal(2100)
    },
    USD: {
      symbol: currencies.USD.code,
      amount: decimal(4623.05)
    },
    GBP: {
      symbol: currencies.GBP.code,
      amount: decimal(4319.49)
    }
  }
};
