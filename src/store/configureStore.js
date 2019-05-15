import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './rootReducer';
import configurePersistReducer from './configurePersistReducer';
import middleware from './middlewares/middleware';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const middlewareEnhancers = applyMiddleware(thunk, reduxRouterMiddleware, middleware)
const persistedReducer = configurePersistReducer(createRootReducer(history));
const enhancer = compose(middlewareEnhancers);

export default initialState => {
  let store = createStore(persistedReducer, initialState, enhancer);
  let persistor = persistStore(store); // .purge() to clear
  return { store, persistor, history };
};
