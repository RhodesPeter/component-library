import React from 'react';
import styled from 'styled-components';
import formatDate from '../scripts/formatDate';
import getWeatherForecast from '../scripts/getWeatherForecast';

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
  padding: 16px 16px 40px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  position: relative;

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

  &:first-of-type {
    padding-top: 0;
  }

  &:last-child {
    border: 0;
  }
`;

const CardInnerTitle = styled.h2`
  color: white;
  margin-top: 0;
`;

const WeatherCard = () => {
  console.log(getWeatherForecast());
  return (
  <Card>
    <CardTitle>Weather card</CardTitle>
    <CardInner>
      <CardFront>
        <CardTop>
          <CardInnerTitle>{formatDate()}</CardInnerTitle>
        </CardTop>
        <Day>Monday</Day>
        <Day>Tuesday</Day>
        <Day>Wednesday</Day>
        <Day>Thursday</Day>
      </CardFront>
    </CardInner>
  </Card>
);

export default WeatherCard;
