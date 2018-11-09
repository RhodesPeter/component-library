import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.isOpen ? '#ccc' : '#eee')};
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;

  &:hover {
    background-color: #ccc;
  }
`;

const Panel = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
`;

class AccordionPanel extends Component {
  constructor(...args) {
    super(...args);
    this.openPanel = this.openPanel.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  openPanel() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }

  render() {
    return (
      <div>
        <Button isOpen={this.state.isOpen} onClick={this.openPanel}>Section 1</Button>
        <Panel isOpen={this.state.isOpen}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
        </Panel>
      </div>
    );
  }
}

export default AccordionPanel;
