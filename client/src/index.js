//librairies import
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
// files import
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import Homepage from "./pages/home";
import Contact from "./pages/contact";
import NewBook from "./pages/new";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<App />} />

        <Route  path="/home" element={<Homepage />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="../new" element={<NewBook />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();



