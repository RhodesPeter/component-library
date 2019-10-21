import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 32px;
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

  input {
    background-color: #eee;
    border: 0;
    width: 100%;
    border-bottom: 2px solid #E0E0E0;
  }
`;

const CardTop = styled.div`
  background-image: linear-gradient(to right, #877eea, #5b4df2);
  padding-top: 56.25%;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

const Day = styled.div`
  padding: 16px;
`;

const WeatherCard = () => (
  <Card>
    <CardTitle>Weather card</CardTitle>
    <CardInner>
      <CardFront>
        <CardTop>Weather today</CardTop>
        <Day>Monday</Day>
        <Day>Tuesday</Day>
        <Day>Wednesday</Day>
      </CardFront>
    </CardInner>
  </Card>
);

export default WeatherCard;
