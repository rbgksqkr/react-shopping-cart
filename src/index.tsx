import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, ReduxThunk)
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
