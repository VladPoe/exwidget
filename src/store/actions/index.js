import { createAction } from 'redux-actions';

const setCrucialError = createAction('SET_CRUCIAL_ERROR', errMsg => errMsg);
const setUserData = createAction('SET_USER_DATA', userData => userData);
const setRates = createAction('SET_RATES', rates => rates);
const setCurrentBaseCurrency = createAction('SET_CURRENT_BASE_CURRENCY', currCode => currCode);
const setExchangeFromCurrency = createAction('SET_EXCHANGE_FROM_CURRENCY', currCode => currCode);
const setExchangeToCurrency = createAction('SET_EXCHANGE_TO_CURRENCY', currCode => currCode);
const setExchangeSum = createAction('SET_EXCHANGE_SUM', value => value);

export default {
  setCrucialError,
  setUserData,
  setRates,
  setCurrentBaseCurrency,
  setExchangeFromCurrency,
  setExchangeToCurrency,
  setExchangeSum
}
