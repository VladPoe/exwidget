import actions from './../actions';
import { handleActions } from 'redux-actions';

const DEFAULT_ERROR_MSG = 'Undefined error occurred. Please contact the support';

export const appStatus = handleActions({
  [actions.setCrucialError]: (state, { payload: message = DEFAULT_ERROR_MSG }) => {
    return { works: false, errorMessage: message }
  }
}, {
  works: true,
  errorMessage: ''
});