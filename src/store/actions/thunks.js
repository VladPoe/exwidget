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

const manageCatch = (dispatch, err, errMessage) => {
  console.error(err);
  dispatch(actions.setCrucialError(errMessage));
};

// -----> FYI <-----
// to trigger error uncomment line 6 in ../services/domainServerService.js

export const initialUpload = () => {
  return (dispatch) => {
    return Promise.all([fetchUserData(), openExchangeService.getBasicRates()])
      .then(([ userData, { base, rates, timestamp } ]) => {
        dispatch(actions.setUserData(userData));
        dispatch(actions.setRates({ base, rates, timestamp }));
        dispatch(actions.setExchangeFromCurrency(userData.mainCurrency));
        dispatch(actions.setExchangeToCurrency(getToCurrency(userData.mainCurrency, userData.account)));
      })
      .catch(err => {
        const msg = formErrorMessage(`"${err}"`);
        manageCatch(dispatch, err, msg);
      });
  }
};

export const updateRates = () => {
  return (dispatch) => {
    openExchangeService.getBasicRates()
      .then(({ base, rates, timestamp }) => {
        const prevRates = store.getState().rates;
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
    const offPreloader = () => {
      dispatch(actions.manageScreenBlocking(false));
      dispatch(actions.setPreloaderMessage(''));
    };
    dispatch(actions.manageScreenBlocking(true));
    dispatch(actions.setPreloaderMessage('Updating you account'));
    emulateAccountUpdateServerRequest(newBalance)
      .then(response => {
        if (response.status === 200) {
          dispatch(actions.updateUserBalance(response.balance));
          dispatch(actions.setExchangeSum(''));
          offPreloader();
        } else {
          throw Error(response.message);
        }
      })
      .catch(err => {
        const msg = formErrorMessage(err.message);
        manageCatch(dispatch, err, msg);
        offPreloader();
      })
  };
};