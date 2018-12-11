import React, { Component } from 'react';
import styled from 'styled-components';
import AccordionPanel from './AccordionPanel';

const AccordionWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
`;

const AccordionTitle = styled.h2`
  color: #DC143C;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: normal;
`;

class Accordion extends Component {
  constructor(...args) {
    super(...args);
    this.closeAllPanels = this.closeAllPanels.bind(this);
    this.childOpen = this.childOpen.bind(this);
    this.state = {
      panelOneOpen: false,
      panelTwoOpen: false,
      panelThreeOpen: false,
      panelFourOpen: false,
    };
  }

  closeAllPanels() {
    this.setState({ panelOneOpen: false });
    this.setState({ panelTwoOpen: false });
    this.setState({ panelThreeOpen: false });
    this.setState({ panelFourOpen: false });
  }

  childOpen(num) {
    this.closeAllPanels();

    if (num === 1) {
      this.setState({ panelOneOpen: !this.state.panelOneOpen });
    } else if (num === 2) {
      this.setState({ panelTwoOpen: !this.state.panelTwoOpen });
    } else if (num === 3) {
      this.setState({ panelThreeOpen: !this.state.panelThreeOpen });
    } else if (num === 4) {
      this.setState({ panelFourOpen: !this.state.panelFourOpen });
    }
  }

  render() {
    return (
      <AccordionWrapper>
        <AccordionTitle>Accordion</AccordionTitle>
        <AccordionPanel isOpen={this.state.panelOneOpen} panelOpened={() => this.childOpen(1)} name="Lorem" />
        <AccordionPanel isOpen={this.state.panelTwoOpen} panelOpened={() => this.childOpen(2)} name="Ipsum" />
        <AccordionPanel isOpen={this.state.panelThreeOpen} panelOpened={() => this.childOpen(3)} name="Dolor" />
        <AccordionPanel isOpen={this.state.panelFourOpen} panelOpened={() => this.childOpen(4)} name="Magna" />
      </AccordionWrapper>
    );
  }
}

export default Accordion;
