import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyles from './Global';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
  <GlobalStyles />
  <App />
  </React.Fragment>
);


