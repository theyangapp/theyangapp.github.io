import { combineReducers } from 'redux';
import app from 'modules/app';
import { connectRouter } from 'connected-react-router'

const reducers = (history) => combineReducers({
  settings: app.settings,
  app: app.reducer,
  router: connectRouter(history),
});

export default reducers;
