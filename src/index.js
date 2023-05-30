import React from 'react';
import ReactDOM from 'react-dom/client';

import RegistrationPage from './pages/register';
import Result from './pages/result';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import Verification from './pages/verification';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Verification/>} />
        <Route path='hasil' element={<Result/>} />
        <Route path='*' element={'404 Not Found'}/> s
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
