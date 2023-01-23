import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './theme/GlobalStyle';
import Header from "./components/Header/index.js"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <React.StrictMode>
      <GlobalStyle />
      <Header>
        <Header.Logo/>
      </Header>
    </React.StrictMode>
  </>
);
