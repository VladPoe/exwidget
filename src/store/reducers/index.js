import { combineReducers } from "redux";
import { appStatus } from "./appStatus";
import { user } from "./user";
import { rates } from "./rates";
import { exchange } from "./exchange";
import { ui } from './uiState';

export default combineReducers({
  appStatus,
  user,
  rates,
  exchange,
  ui
});
