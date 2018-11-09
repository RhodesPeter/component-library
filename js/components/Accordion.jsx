import React from 'react';
import styled from 'styled-components';
import AccordionPanel from './AccordionPanel';

const AccordionWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
`;

const AccordionTitle = styled.h2`
  color: #DC143C;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: normal;
`;

const Accordion = () => (
  <AccordionWrapper>
    <AccordionTitle>Accordion</AccordionTitle>
    <AccordionPanel />
    <AccordionPanel />
    <AccordionPanel />
  </AccordionWrapper>
);

export default Accordion;
