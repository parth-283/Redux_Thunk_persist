import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { PersistGate } from 'redux-persist/es/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)