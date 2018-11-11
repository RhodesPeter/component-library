import React from 'react';
import styled from 'styled-components';
import Accordion from '../components/Accordion';
import InformationCard from '../components/InformationCard';

const Wrapper = styled.div`
  background-color: #1a1110;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const H1 = styled.h1`
  color: #DC143C;
  margin: 0;
  padding: 24px 0;
  grid-column-start: 2;
  grid-column-end: 4;
  font-weight: normal;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const Homepage = () => (
  <Wrapper>
    <H1>COMPONENT LIBRARY</H1>
    <Accordion />
    <InformationCard />
  </Wrapper>
);

export default Homepage;
