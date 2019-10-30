import React, { Component } from 'react';
import styled from 'styled-components';
import formatDate from '../scripts/formatDate';
import getWeatherForecast from '../scripts/getWeatherForecast';
import formatTemp from '../scripts/formatTemp';

const Card = styled.div`
  width: 300px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 40px;
`;

const CardTitle = styled.h2`
  color: #DC143C;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: normal;
`;

const CardInner = styled.div`
  position: relative;
  box-shadow: 0px 5px 13px -1px rgba(0,0,0,0.20);
  border-radius: 3px;
`;

const CardFront = styled.div`
  background-color: #eee;
  padding: 0;
  font-size: 15px;
  color: #444;
  border-radius: 3px;
`;

const CardTop = styled.div`
  background-image: linear-gradient(to right, #877eea, #5b4df2);
  padding: 16px 16px 48px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  position: relative;
  text-align: center;

  &:after {
    background: no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23eee' fill-opacity='1' d='M0,224L120,229.3C240,235,480,245,720,229.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 100%;
    background-position: left bottom;
    position: absolute;
    content: '';
    height: 40px;
    width: 100%;
    bottom: -2px;
    left: 0;
  }
`;

const Day = styled.div`
  padding: 16px 0;
  margin: 0 16px;
  border-bottom: 1px solid #877eea;
  display: flex;
  justify-content: space-between;

  &:nth-child(2) {
    padding-top: 0;
  }

  &:last-child {
    border: 0;
  }
`;

const CardInnerTitle = styled.h3`
  color: white;
  margin: 0;
  text-transform: capitalize;
  font-size: 16px;
`;

const CityTitle = styled.h3`
  color: white;
  margin: 0;
  font-size: 16px;
`;

const CardTemp = styled.h2`
  color: white;
  margin: 0;
  font-size: 88px;
  font-weight: normal;
  margin: 8px 0;
`;

const Deg = styled.p`
  font-size: 32px;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  margin-top: 16px;
  font-weight: 200;
  position: relative;
`;

class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      London: null,
      NewYork: null,
      Paris: null,
      Tokyo: null,
    };
  }

  componentDidMount() {
    getWeatherForecast('London,uk').then(London => this.setState({ London }));
    getWeatherForecast('New York,usa').then(NewYork => this.setState({ NewYork }));
    getWeatherForecast('Paris,fr').then(Paris => this.setState({ Paris }));
    getWeatherForecast('Tokyo,jp').then(Tokyo => this.setState({ Tokyo }));
  }

  render() {
    return (
      <Card>
        <CardTitle>Weather card</CardTitle>
        <CardInner>
          <CardFront>
            <CardTop>
              <CityTitle>{this.state.London ? this.state.London.data.name : 'Loading...'}</CityTitle>
              <CardInnerTitle>{formatDate()}</CardInnerTitle>
              <CardTemp>
                {this.state.London ? formatTemp(this.state.London.data.main.temp) : ''}
                <Deg>°C</Deg>
              </CardTemp>
              <CardInnerTitle>{this.state.London ? this.state.London.data.weather[0].description : 'Loading...'}</CardInnerTitle>
            </CardTop>
            <Day>
              New York <span>{this.state.NewYork ? formatTemp(this.state.NewYork.data.main.temp) : 'Loading...'}°C</span>
            </Day>
            <Day>
              Paris <span>{this.state.Paris ? formatTemp(this.state.Paris.data.main.temp) : 'Loading...'}°C</span>
            </Day>
            <Day>
              Tokyo <span>{this.state.Tokyo ? formatTemp(this.state.Tokyo.data.main.temp) : 'Loading...'}°C</span>
            </Day>
          </CardFront>
        </CardInner>
      </Card>
    );
  }
}

export default WeatherCard;
