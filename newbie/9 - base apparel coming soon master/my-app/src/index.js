import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './theme/GlobalStyle';
import Header from "./components/Header/index.js"
import Logo from './components/Header/Logo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <React.StrictMode>
      <GlobalStyle />
      <Header>
        <Header.Logo width="100px" height="20px" viewBox="0px 0px 100px 21px">
          <use xlinkHref={`${logo}#a`} />
        <Header.Logo />
      </Header>
    </React.StrictMode>
  </>
);
