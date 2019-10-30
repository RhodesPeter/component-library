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
  border-radius: 3px;
`;

const CardTitle = styled.h2`
  color: #DC143C;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: normal;
`;

const CardFront = styled.div`
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
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-right: 6px;
  border: 2px solid #877eea;
  padding: 0;
  background-color: ${props => (props.isActive ? '#877eea' : '#fff')};
  outline: none;

  &:last-of-type {
      margin-right: 0;
  }

  &:hover,
  &:focus {
    border-color: #5b4df2;
  }
`;

const ImageNav = styled.nav`
  align-items: center;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
`;

const NavIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CardBottom = styled.div`
  padding: 16px;
`;

const CardInnerTitle = styled.h3`
  margin-top: 0;
`;

// const Buttonwrapper = styled.div`
//   display: flex;
// `;

// const PageButtons = styled.button`
//   flex: 1;
//   background-color: #877eea;
//   border: 0;
//   padding: 16px;
//   font-size: 32px;
//   color: white;

//   &:first-child {
//     border-bottom-left-radius: 3px;
//     border-right: 1px solid white;
//   }

//   &:last-child {
//     border-bottom-right-radius: 3px;
//     border-left: 1px solid white;
//   }
// `;

// const NavButton = styled.button`
//   background-color: #877eea;
//   border: 2px solid #877eea;
//   border-radius: 50%;
//   font-size: 18px;
//   font-weight: bold;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   color: #fff;
//   outline: none;

//   &:hover {
//     border-color: #5b4df2;
//   }
// `;

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
              <NavIconsWrapper>
                {images.map((src, i) => (
                  <Dot
                    data-dot-num={i}
                    isActive={this.state.imageVisible === i}
                    key={src}
                    onClick={this.handleClick}
                  />))}
              </NavIconsWrapper>
            </ImageNav>
            <CardBottom>
              <CardInnerTitle>Image title</CardInnerTitle>
              <p>Image description description description description description description</p>
            </CardBottom>
          </CardFront>
        </CardInner>
      </Card>
    );
  }
}

/* <NavButton onClick={this.handleLeftArrowClick}>&larr;</NavButton> */
/* <NavButton onClick={this.handleRightArrowClick}>&rarr;</NavButton> */
/* <Buttonwrapper>
  <PageButtons onClick={this.handleLeftArrowClick}>&larr;</PageButtons>
  <PageButtons onClick={this.handleRightArrowClick}>&rarr;</PageButtons>
</Buttonwrapper> */

export default SearchCard;
