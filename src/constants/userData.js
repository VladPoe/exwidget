import currencies from './currencies';
import { decimal } from '../utils/decimal'

export default {
  name: 'Vlad',
  surname: 'Pocheptcov',
  baseSymbol: currencies.usd.code,
  account: {
    eur: {
      symbol: currencies.eur.symbol,
      amount: decimal(2100)
    },
    usd: {
      symbol: currencies.usd.symbol,
      amount: decimal(4623.05)
    },
    gbp: {
      symbol: currencies.gbp.symbol,
      amount: decimal(4319.49)
    }
  }
};
