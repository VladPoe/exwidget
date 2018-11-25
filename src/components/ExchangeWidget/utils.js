import { emulateAccountUpdateServerRequest } from './../../services/domainServerService';
import actions from './../../store/actions';
import { formErrorMessage } from './../../store/actions/thunks';
import { decimal, add, subtract } from './../../utils/decimal';


export const updateBalance = (dispatch, state, newBalance) => {
  console.log(dispatch);
  console.log(newBalance);
  emulateAccountUpdateServerRequest(newBalance)
    .then(response => {
      if (response.status === 200) {
        dispatch(actions.updateUserBalance(response.balance));
      } else {
        throw Error(response.message);
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(actions.setCrucialError(formErrorMessage(err.message)));
    })
};


export const countNewBalance = (initialBalance, fromCurr, fromSum, toCurr, toSum) => {
  return {
    ...initialBalance,
    [fromCurr]: {
      symbol: fromCurr,
      amount: subtract(decimal(initialBalance[fromCurr].amount))(fromSum).toFixed(2)
    },
    [toCurr]: {
      symbol: toCurr,
      amount: add(decimal(initialBalance[toCurr].amount))(toSum).toFixed(2)
    }
  };
};