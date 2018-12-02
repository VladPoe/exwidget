import actions from './../actions';
import { handleActions } from 'redux-actions';

export const ui = handleActions({
  [actions.managePreloader]:(state, { payload: bool }) => {
    return { ...state, preloaderBlock: { ...state.preloaderBlock, isActive: bool } };
  },
  [actions.setPreloaderMessage]:(state, { payload: msg = '' }) => {
    return { ...state, preloaderBlock: { ...state.preloaderBlock, message: msg } };
  }
}, {
  preloaderBlock: { isActive: false, message: '' }
});