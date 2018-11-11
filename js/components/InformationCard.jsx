import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  grid-column-start: 5;
  grid-column-end: 8;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

const CardBodyFront = styled.div`
  position: absolute;
  backface-visibility: hidden;
`;

const CardBodyBack = styled.div`
  color: white;
  transform: rotateY(180deg);
  position: relative;
  backface-visibility: hidden;
  height: 100%;
`;

const CardTitle = styled.h2`
  color: #DC143C;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: normal;
`;

const MountainsImg = styled.img`
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: block;
`;

const CardInformationFront = styled.div`
  background-color: #eee;
  padding: 16px;
  font-size: 15px;
  color: #444;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: 2px solid #DC143C;
`;

const CardInformationBack = styled.div`
  background-color: #eee;
  padding: 16px;
  font-size: 15px;
  color: #444;
  border-radius: 3px;
`;

const CardHeader = styled.h3`
  margin: 0 0 16px;
`;

const CardParagraph = styled.p`
  margin: 0 0 16px;
`;

const CardButton = styled.button`
  border: 2px solid #DC143C;
  background-color: white;
  margin: 0 0 0 auto;
  display: block;
  border-radius: 3px;
  padding: 4px 8px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #DC143C;
    color: #eee;
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;

class InformationCard extends Component {
  constructor(...args) {
    super(...args);
    this.flipCard = this.flipCard.bind(this);
    this.state = {
      cardFlipped: false,
    };
  }

  flipCard() {
    this.setState({ cardFlipped: !this.state.cardFlipped });
  }

  render() {
    return (
      <Card>
        <CardTitle>Information Card</CardTitle>
        <CardInner isFlipped={this.state.cardFlipped}>
          <CardBodyFront>
            <MountainsImg alt="" src="../../public/assets/mountains.jpg" />
            <CardInformationFront>
              <CardHeader>Lorem Ipsum</CardHeader>
              <CardParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris.
              </CardParagraph>
              <CardButton onClick={this.flipCard}>Details</CardButton>
            </CardInformationFront>
          </CardBodyFront>
          <CardBodyBack>
            <CardInformationBack>
              <CardHeader>Lorem Ipsum</CardHeader>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Ut enim ad minim veniam</li>
                <li>Incididunt ut labore et dolore</li>
                <li>Consectetur adipisicing elit</li>
                <li>Nostrud exercitation ullamco</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Ut enim ad minim veniam</li>
                <li>Incididunt ut labore et dolore</li>
                <li>Consectetur adipisicing elit</li>
                <li>Nostrud exercitation ullamco</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Ut enim ad minim veniam</li>
                <li>Incididunt ut labore et dolore</li>
                <li>Consectetur adipisicing elit</li>
                <li>Nostrud exercitation ullamco</li>
                <li>Consectetur adipisicing elit</li>
              </ul>
              <CardButton onClick={this.flipCard}>
                {this.state.cardFlipped ? 'Back' : 'Details'}
              </CardButton>
            </CardInformationBack>
          </CardBodyBack>
        </CardInner>
      </Card>
    );
  }
}

export default InformationCard;
