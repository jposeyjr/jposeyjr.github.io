import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reduxPosts = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return state;
    case 'SET_POSTS':
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(
  reduxPosts,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
