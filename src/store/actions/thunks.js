import actions from './index.js'
import { fetchUserData } from "../../services/domainServerService";
import openExchangeService from './../../services/openExchangeService';
import { store } from './../index';
import areDeeplyEqual from './../../utils/areDeeplyEqual';

const formErrorMessage = (reason) => {
  return ` We see that some error occurred because of the following reason:\n${reason}`;
};

// -----> FYI <-----
// to trigger uncomment line 23  in ../services/OpenExchangeService.js
// or uncomment line 7 in ../services/domainServerService.js
export const initialUpload = (cb = () => null) => {
  return (dispatch) => {
    Promise.all([fetchUserData(), openExchangeService.getBasicRates()])
      .then(([ userData, { base, rates, timestamp } ]) => {
        dispatch(actions.setUserData(userData));
        dispatch(actions.setRates({ base, rates, timestamp }));
        cb();
      })
      .catch(err => {
        console.log(err);
        dispatch(actions.setCrucialError(formErrorMessage(`"${err}"`)));
        cb();
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
        console.log(err);
        dispatch(actions.setCrucialError(formErrorMessage(`API response ${err}`)));
      });
  }
};