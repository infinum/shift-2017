import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import rootReducer from './reducer';
import {loadData} from './actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(loadData());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
