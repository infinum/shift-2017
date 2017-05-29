import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';
import {loadData} from './actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(loadData());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
