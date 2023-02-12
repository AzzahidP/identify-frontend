import React from 'react';
import ReactDOM from 'react-dom/client';
import FillData from './pages/fillData';
import LoginPage from './pages/login';
import OpenWebCam from './pages/openWebcam';
import SignUpPage from './pages/signup';
import Result from './pages/result';
import './index.css';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Result />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
