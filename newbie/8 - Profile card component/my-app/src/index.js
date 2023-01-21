import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Card from './components/Card/';
import GlobalStyle from './components/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <GlobalStyle />
    <Card />
  </React.Fragment>
);
