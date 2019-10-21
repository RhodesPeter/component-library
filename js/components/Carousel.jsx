import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 40px;
`;

const CardInner = styled.div`
  position: relative;
  box-shadow: 0px 5px 13px -1px rgba(0,0,0,0.20);
`;

const CardTitle = styled.h2`
  color: #DC143C;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: normal;
`;

const CardFront = styled.div`
  background-color: #eee;
  padding: 0;
  font-size: 15px;
  color: #444;
  border-radius: 3px;
`;

const MountainsImg = styled.img`
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: block;
`;

const Dot = styled.button`
  height: ${props => (props.isActive ? '24px' : '16px')};
  width: ${props => (props.isActive ? '24px' : '16px')};
  background-color: #877eea;
  border-radius: 50%;
  margin-right: 8px;
  border: none;

  &:last-of-type {
      margin-right: 0;
  }
`;

const ImageNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

class SearchCard extends Component {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeDot: 2,
    };
  }

  handleClick(event) {
    console.log(event);
    this.setState({ activeDot: 1 });
  }

  render() {
    return (
      <Card>
        <CardTitle>Carousel</CardTitle>
        <CardInner>
          <CardFront>
            <MountainsImg alt="" src="../../public/assets/mountains.jpg" />
            <ImageNav>
              <Dot onClick={this.handleClick} />
              <Dot onClick={this.handleClick} />
              <Dot onClick={this.handleClick} isActive />
              <Dot onClick={this.handleClick} />
              <Dot onClick={this.handleClick} />
            </ImageNav>
          </CardFront>
        </CardInner>
      </Card>
    );
  }
}

export default SearchCard;
