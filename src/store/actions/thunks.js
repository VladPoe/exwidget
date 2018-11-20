import actions from './index.js'
import { fetchUserData } from "../../services/domainServerService";
import openExchangeService from './../../services/openExchangeService';

const formErrorMessage = (reason) => {
  return ` We see that some error occurred because of the following reason:\n${reason}`;
};

// -----> FYI <-----
// to trigger error replace OEX.KEY to OEX.FAKE_KEY on line 17 in ../utils/OpenExchangeUtils.js
// of uncomment line 7 in ../services/domainServerService.js

export const initialUpload = (cb = () => null) => {
  return (dispatch) => {
    Promise.all([fetchUserData(), openExchangeService.getBasicRates()])
      .then(([ userData, exRates ]) => {
        dispatch(actions.setUserData(userData));
        dispatch(actions.setRates(exRates));
        cb();
      })
      .catch(err => {
        console.log(err);
        dispatch(actions.setCrucialError(formErrorMessage(`database response "${err}"`)));
        cb();
      });
  }
};

export const updateRates = () => {
  return (dispatch) => {
    openExchangeService.getBasicRates()
      .then(exRates => {
        dispatch(actions.setRates(exRates));
      })
      .catch(err => {
        console.log(err);
        dispatch(actions.setCrucialError(formErrorMessage(`database response "${err}"`)));
      });
  }
};