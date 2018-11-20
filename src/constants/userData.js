import currencies from './currencies';
import { decimal } from '../utils/decimal'

export default {
  name: 'Vlad',
  surname: 'Pocheptcov',
  baseCurrency: currencies.usd.code,
  account: {
    eur: {
      symbol: currencies.eur.code,
      amount: decimal(2100)
    },
    usd: {
      symbol: currencies.usd.code,
      amount: decimal(4623.05)
    },
    gbp: {
      symbol: currencies.gbp.code,
      amount: decimal(4319.49)
    }
  }
};
