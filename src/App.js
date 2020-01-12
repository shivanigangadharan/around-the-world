import React from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/navbar';
import JoinMe from './components/joinme';
import SecondText from './components/secondtext';
import WhatWeDo from './components/whatwedo';
import Theory from './components/theory';
import Numbers from './components/numbers';
import Work from './components/work';
import Quotes from './components/quotes';
import LetsMeet from './components/letsmeet';
import Footer from './components/footer';

const Main = styled.div`
font-family: 'Poppins', sans-serif;
`

function App() {
  return (
    <Main>
      <Navbar />
      <JoinMe />
      <SecondText />
      <WhatWeDo />
      <Theory />
      <Numbers />
      <Work />
      <Quotes />
      <LetsMeet />
      <Footer />
    </Main>
  );
}

export default App;
