import actions from './index.js'
import { fetchUserData } from "../../services/domainServerService";
import openExchangeService from './../../services/openExchangeService';

const formErrorMessage = (reason) => {
  return `Unfortunately we see that some error occurred by the following reason: ${reason}`;
};

// -----> FYI <-----
// to trigger an error replace OEX.KEY to OEX.FAKE_KEY on line 17 in ../utils/OpenExchangeUtils.js
// of uncomment line 7 in ../services/domainServerService.js

export const initialUpload = (cb = () => null) => {
  return (dispatch) => {
    Promise.all([fetchUserData(), openExchangeService.getBasicRates()])
      .then(([ userData, exRates ]) => {
        console.log(userData, exRates);
        dispatch(actions.setUserData(userData));
        dispatch(actions.setRates(exRates));
        cb();
      })
      .catch(err => {
        console.log(err);
        dispatch(actions.setCrucialError(formErrorMessage(err)));
        cb();
      });
  }
};