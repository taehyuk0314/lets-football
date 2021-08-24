import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/main/main';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
require("./assets/css/style.css");



axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;
axios.defaults.withCredentials = true;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
