import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import One from '../components/one';
import SecondText from '../components/secondtext';
import WhatWeDo from '../components/whatwedo';
import Theory from '../components/theory';
import Numbers from '../components/numbers';
import Work from '../components/work';
import Quotes from '../components/quotes';
import LetsMeet from '../components/letsmeet';
import Footer from '../components/footer';

const Main = styled.div`
font-family: 'Poppins', sans-serif;
`

function Homepage() {

  return (

    < Main >
      <One />
      <SecondText />
      <WhatWeDo />
      <Theory />
      <Numbers />
      <Work />
      <Quotes />
      <LetsMeet />
      <Footer />
    </Main >
  );

}

export default Homepage;
