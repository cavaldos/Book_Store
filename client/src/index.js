//librairies import
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
// files import
import App from './App';
import reportWebVitals from './reportWebVitals';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

