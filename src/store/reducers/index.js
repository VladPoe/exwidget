import { combineReducers } from "redux";
import { appStatus } from "./appStatus";
import { user } from "./user";
import { rates } from "./rates";
import { currentBaseCurrency } from './currentBaseCurrency';
import { exchange } from "./exchange";

export default combineReducers({
  appStatus,
  user,
  rates,
  currentBaseCurrency,
  exchange
});
