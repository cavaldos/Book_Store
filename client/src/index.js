//librairies import
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
// files import
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

reportWebVitals();

