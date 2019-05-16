import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';
import collections from 'utils/themes';

function theme(state = collections[0], action) {
  switch (action.type) {
    case ActionTypes.UPDATE_THEME:
      return collections[action.theme];
    default:
      return state;
  }
}

export default combineReducers({
  theme
});
