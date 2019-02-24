import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const ButtonTitle = styled.h2`
  color: #DC143C;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: normal;
`;

const Button = styled.button`
  outline: none;
  border: 0;
  font-size: 20px;
  width: 260px;
  height: 50px;
  border-radius: 30px;
  overflow: hidden;
  background-size: 100% 300%;
  position: relative;
  cursor: pointer;
  color: ${props => (props.active ? 'white' : 'black')};
  &:active,
  &:focus {
    transform: translateY(2px);
  }
`;

const Message = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 400ms cubic-bezier(0.465, -0.085, 0.390, 1.395);
  transform: ${(props) => {
    if (props.done) {
      return 'translateY(-5px)';
    } else if (props.active) {
      return 'translateY(-65px)';
    }
    return 'translateY(-125px)';
  }};
`;

const MessageText = styled.span`
  display: block;
  padding: 20px 0;
  line-height: 20px;

  &:nth-child(1) {
    background-color: green;
  }

  &:nth-child(2) {
    background-color: blue;
  }

  &:nth-child(3) {
    background-color: gold;
  }
`;

const bounce = keyframes`
  0%   {
    transform: translateY(0);
  }
  50%  {
    transform: translateY(-2px);
  }
`;

const Dot = styled.span`
  padding: 0;
  display: inline-block;
  animation: ${bounce} 600ms ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 200ms;
  }

  &:nth-child(3) {
    animation-delay: 400ms;
  }
`;

class ResponsiveButton extends Component {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      buttonActive: false,
      buttonDone: false,
    };
  }

  handleClick() {
    this.setState({ buttonActive: true });

    setTimeout(() => {
      this.setState({ buttonDone: true });
    }, 3000);

    setTimeout(() => {
      this.setState({ buttonDone: false });
      this.setState({ buttonActive: false });
    }, 8000);
  }

  render() {
    return (
      <ButtonWrapper>
        <ButtonTitle>Responsive Button</ButtonTitle>
        <Button active={this.state.buttonActive} onClick={this.handleClick}>
          <Message active={this.state.buttonActive} done={this.state.buttonDone}>
            <MessageText>Success!</MessageText>
            <MessageText>
              Processing<Dot>.</Dot><Dot>.</Dot><Dot>.</Dot>
            </MessageText>
            <MessageText>Pay now</MessageText>
          </Message>
        </Button>
      </ButtonWrapper>
    );
  }
}

export default ResponsiveButton;
