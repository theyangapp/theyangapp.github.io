import React from 'react'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router'
import configureStore from 'store/configureStore';
import Platform from './Platform';
const { store, persistor, history } = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Platform/>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}
