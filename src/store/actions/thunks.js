import actions from './index.js'
import { fetchUserData } from '../../services/domainServerService';
import openExchangeService from './../../services/openExchangeService';
import { store } from './../index';
import areDeeplyEqual from './../../utils/areDeeplyEqual';
import { getToCurrency } from './../../utils/currencies';
import { emulateAccountUpdateServerRequest } from './../../services/domainServerService';
import { countNewBalance } from './../../utils/countNewBalance';
import {convertGivenSumFromTo} from "../../utils/conversion";


export const formErrorMessage = (reason) => {
  return `We see that some error occurred because of the following reason:\n${reason}`;
};

const onPreloader = (dispatch, msg) => {
  dispatch(actions.managePreloader(true));
  dispatch(actions.setPreloaderMessage(msg));
};

const offPreloader = (dispatch) => {
  dispatch(actions.managePreloader(false));
  dispatch(actions.setPreloaderMessage(''));
};

const manageCatch = (dispatch, err, errMessage) => {
  console.error(err);
  dispatch(actions.setCrucialError(errMessage));
};

// -----> FYI <-----
// to trigger error uncomment line 6 in ../services/domainServerService.js

export const initialUpload = () => {
  return (dispatch) => {
    onPreloader(dispatch, 'Loding your data...');
    return Promise.all([fetchUserData(), openExchangeService.getBasicRates()])
      .then(([ userData, { base, rates, timestamp } ]) => {
        dispatch(actions.setUserData(userData));
        dispatch(actions.setRates({ base, rates, timestamp }));
        dispatch(actions.setExchangeFromCurrency(userData.mainCurrency));
        dispatch(actions.setExchangeToCurrency(getToCurrency(userData.mainCurrency, userData.account)));
        offPreloader(dispatch);
      })
      .catch(err => {
        const msg = formErrorMessage(`"${err}"`);
        offPreloader(dispatch);
        manageCatch(dispatch, err, msg);
      });
  }
};

export const updateRates = () => {
  return (dispatch, getState) => {
    openExchangeService.getBasicRates()
      .then(({ base, rates, timestamp }) => {
        const prevRates = getState().rates;
        const newRates = { base, rates, timestamp };
        if (areDeeplyEqual(prevRates, newRates)) return;
        dispatch(actions.setRates(newRates));
      })
      .catch(err => {
        const msg = formErrorMessage(`API response ${err}`);
        manageCatch(dispatch, err, msg);
      });
  }
};

export const updateBalance = () => {
  return (dispatch, getState) => {
    const {
      exchange: { fromCurrency, toCurrency, sum },
      user: { account: currentBalance },
      rates : { rates }
    } = getState();
    const newBalance = countNewBalance(
      currentBalance,
      fromCurrency,
      sum,
      toCurrency,
      convertGivenSumFromTo(sum)(rates[toCurrency])(rates[fromCurrency]).toFixed(4)
    );
    onPreloader(dispatch, 'Updating your account...');
    emulateAccountUpdateServerRequest(newBalance)
      .then(response => {
        if (response.status === 200) {
          dispatch(actions.updateUserBalance(response.balance));
          dispatch(actions.setExchangeSum(''));
          offPreloader(dispatch);
        } else {
          throw Error(response.message);
        }
      })
      .catch(err => {
        const msg = formErrorMessage(err.message);
        manageCatch(dispatch, err, msg);
        offPreloader(dispatch);
      })
  };
};