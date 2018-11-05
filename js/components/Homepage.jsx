import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #1a1110;
  height: 100vh;
  width: 100vw;
`;

const H1 = styled.h1`
  color: #DC143C;
  margin: 0;
  padding: 24px;
`;

const Homepage = () => (
  <Wrapper>
    <H1>Component Library</H1>
  </Wrapper>
);

export default Homepage;
