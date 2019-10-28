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
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin-right: 6px;
  border: 2px solid #877eea;
  padding: 0;
  background-color: ${props => (props.isActive ? '#877eea' : '#fff')};
  outline: none;

  &:last-of-type {
      margin-right: 0;
  }

  &:hover {
    border-color: #5b4df2;
  }
`;

const ImageNav = styled.nav`
  align-items: center;
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;

const NavIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  background-color: #877eea;
  border: 2px solid #877eea;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
  width: 32px;
  height: 32px;
  padding: 0;
  color: #fff;
  outline: none;

  &:hover {
    border-color: #5b4df2;
  }
`;

const images = [
  '../../public/assets/mountains1.jpg',
  '../../public/assets/mountains2.jpg',
  '../../public/assets/mountains3.jpg',
  '../../public/assets/mountains4.jpg',
  '../../public/assets/mountains5.jpg',
];

class SearchCard extends Component {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.state = {
      imageVisible: 0,
    };
  }

  handleClick(event) {
    this.setState({ imageVisible: +event.target.getAttribute('data-dot-num') });
  }

  handleLeftArrowClick() {
    const current = this.state.imageVisible;
    const newCount = current >= 1 ? current - 1 : images.length - 1;
    this.setState({ imageVisible: newCount });
  }

  handleRightArrowClick() {
    const current = this.state.imageVisible;
    const newCount = current < images.length - 1 ? current + 1 : 0;
    this.setState({ imageVisible: newCount });
  }

  render() {
    return (
      <Card>
        <CardTitle>Carousel</CardTitle>
        <CardInner>
          <CardFront>
            <MountainsImg alt="" src={images[this.state.imageVisible]} />
            <ImageNav>
              <NavButton onClick={this.handleLeftArrowClick}>&larr;</NavButton>
              <NavIconsWrapper>
                {images.map((src, i) => (
                  <Dot
                    data-dot-num={i}
                    isActive={this.state.imageVisible === i}
                    key={src}
                    onClick={this.handleClick}
                  />))}
              </NavIconsWrapper>
              <NavButton onClick={this.handleRightArrowClick}>&rarr;</NavButton>
            </ImageNav>
          </CardFront>
        </CardInner>
      </Card>
    );
  }
}

export default SearchCard;
