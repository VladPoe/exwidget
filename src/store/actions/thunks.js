import actions from './index.js'
import { fetchUserData } from "../../services/domainServerService";
import openExchangeService from './../../services/openExchangeService';

const formErrorMessage = (reason) => {
  return ` We see that some error occurred because of the following reason:\n${reason}`;
};

// -----> FYI <-----
// to trigger uncomment line 23  in ../services/OpenExchangeService.js
// or uncomment line 7 in ../services/domainServerService.js
export const initialUpload = (cb = () => null) => {
  return (dispatch) => {
    Promise.all([fetchUserData(), openExchangeService.getBasicRates()])
      .then(([ userData, exRates ]) => {
        dispatch(actions.setUserData(userData));
        dispatch(actions.setCurrentBaseCurrency(userData.baseCurrency));
        dispatch(actions.setRates(exRates));
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
      .then(exRates => {
        dispatch(actions.setRates(exRates));
      })
      .catch(err => {
        console.log(err);
        dispatch(actions.setCrucialError(formErrorMessage(`API response ${err}`)));
      });
  }
};