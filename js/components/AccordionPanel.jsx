import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PanelWrapper = styled.div`
  border-bottom: 2px solid #5b4df2;
  box-shadow: 0px 5px 13px -1px rgba(0,0,0,0.20);

  &:first-of-type {
    Button {
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
  }

  &:last-of-type {
    border: 0;

    border-bottom-right-radius: ${props => (props.isOpen ? '0' : '3px')};
    border-bottom-left-radius: ${props => (props.isOpen ? '0' : '3px')};

    Button {
      border-bottom-right-radius: ${props => (props.isOpen ? '0' : '3px')};
      border-bottom-left-radius: ${props => (props.isOpen ? '0' : '3px')};
    }
  }
`;

const Button = styled.button`
  background-color: ${props => (props.isOpen ? '#877eea' : 'white')};
  color: ${props => (props.isOpen ? 'white' : '#444')};
  cursor: pointer;
  padding: 16px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: background-color 0.3s ease;
  position: relative;

  &:hover,
  &:focus {
    background-color: #877eea;
    color: white;
  }

  &:after {
    position: absolute;
    content: '';
    right: 16px;
    top: 20px;
    width: 10px;
    height: 10px;
    transition: transform 0.5s ease;
    transform: rotate(45deg);
    transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z'/%3E%3C/svg%3E");
    background-size: 100%;
  }
`;

const Panel = styled.div`
  max-height: ${props => (props.isOpen ? '190px;' : '0')};
  padding: 0 18px;
  overflow: hidden;
  transition: max-height 0.5s ease;
`;

const AccordionPanel = props => (
  <PanelWrapper isOpen={props.isOpen}>
    <Button isOpen={props.isOpen} onClick={props.panelOpened}>
      {props.name}
    </Button>
    <Panel isOpen={props.isOpen}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    </Panel>
  </PanelWrapper>
);

AccordionPanel.propTypes = {
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  panelOpened: PropTypes.func.isRequired,
};

export default AccordionPanel;
