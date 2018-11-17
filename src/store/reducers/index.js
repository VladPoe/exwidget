import { combineReducers } from "redux";
import { appStatus } from "./appStatus";
import { user } from "./user";
import { rates } from "./rates";
// import visibilityFilter from "./visibilityFilter";
// import todos from "./todos";

export default combineReducers({
  appStatus,
  user,
  rates
});
