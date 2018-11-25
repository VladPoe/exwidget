import { createAction } from 'redux-actions';

const setCrucialError = createAction('SET_CRUCIAL_ERROR', errMsg => errMsg);
const setUserData = createAction('SET_USER_DATA', userData => userData);
const setRates = createAction('SET_RATES', rates => rates);
const setUserCurrency = createAction('SET_USER_CURRENCY', currCode => currCode);
const setExchangeFromCurrency = createAction('SET_EXCHANGE_FROM_CURRENCY', currCode => currCode);
const setExchangeToCurrency = createAction('SET_EXCHANGE_TO_CURRENCY', currCode => currCode);
const setExchangeSum = createAction('SET_EXCHANGE_SUM', value => value);
const setIsExchangeSumAvailable = createAction('IS_EXCHANGE_SUM_AVAILABLE', value => value);
const updateUserBalance = createAction('UPDATE_USER_BALANCE', value => value);
const manageScreenBlocking = createAction('MANAGE_SCREEN_BLOCKING', boolFlag => boolFlag);
const setPreloaderMessage = createAction('SET_PRELOADER_MESSAGE', msg => msg);

export default {
  setCrucialError,
  setUserData,
  setRates,
	setUserCurrency,
  setExchangeFromCurrency,
  setExchangeToCurrency,
  setExchangeSum,
  setIsExchangeSumAvailable,
  updateUserBalance,
  manageScreenBlocking,
  setPreloaderMessage
}
