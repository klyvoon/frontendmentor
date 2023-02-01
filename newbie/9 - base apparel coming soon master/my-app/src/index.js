import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './theme/GlobalStyle';
import Header from "./components/Header/index.js"
import Hero from './components/Hero/index.js';
import Section from './components/Section';
import Form from './components/Form';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <React.StrictMode>
      <GlobalStyle />

      <Header>
        <Header.Logo/>
      </Header>

      <Hero />

      <Section id="section">
        <Section.Title>
          WE'RE<br></br>
          <span>
            COMING SOON
          </span>
        </Section.Title>
        <Section.Paragraph>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</Section.Paragraph>
      </Section>

      <Form>
        
      </Form>



    </React.StrictMode>
  </>
);
