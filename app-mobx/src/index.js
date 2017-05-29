import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Store from './store';
import loadData from './utils/api';

const store = window.store = new Store();

loadData(store);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
