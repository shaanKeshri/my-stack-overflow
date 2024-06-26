import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { configureStore, compose, applyMiddleware } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import Reducers from './reducers/index';

// const store = configureStore(Reducers, compose(applyMiddleware(thunk)));
const store = configureStore({
  reducer: Reducers,
  Middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
