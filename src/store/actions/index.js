import { createAction } from 'redux-actions';

const setCrucialError = createAction('SET_CRUCIAL_ERROR', errMsg => errMsg);
const setUserData = createAction('SET_USER_DATA');
const setRates = createAction('SET_RATES', rates => rates);
const setCurrentBaseCurrency = createAction('SET_CURRENT_BASE_CURRENCY', currCode => currCode);

export default {
  setCrucialError,
  setUserData,
  setRates,
  setCurrentBaseCurrency
}
