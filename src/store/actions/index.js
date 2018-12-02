import { createAction } from 'redux-actions';

const setCrucialError = createAction('SET_CRUCIAL_ERROR');
const setUserData = createAction('SET_USER_DATA');
const setRates = createAction('SET_RATES');
const setUserCurrency = createAction('SET_USER_CURRENCY');
const setExchangeFromCurrency = createAction('SET_EXCHANGE_FROM_CURRENCY');
const setExchangeToCurrency = createAction('SET_EXCHANGE_TO_CURRENCY');
const setExchangeSum = createAction('SET_EXCHANGE_SUM');
const setIsExchangeSumAvailable = createAction('IS_EXCHANGE_SUM_AVAILABLE');
const updateUserBalance = createAction('UPDATE_USER_BALANCE');
const managePreloader = createAction('MANAGE_SCREEN_BLOCKING');
const setPreloaderMessage = createAction('SET_PRELOADER_MESSAGE');

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
  managePreloader,
  setPreloaderMessage
}
