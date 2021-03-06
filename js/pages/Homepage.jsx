import React from 'react';
import styled from 'styled-components';
import TopNav from '../components/TopNav';
import Accordion from '../components/Accordion';
import InformationCard from '../components/InformationCard';
import TodoList from '../components/TodoList';
import SearchCard from '../components/SearchCard';
import Carousel from '../components/Carousel';
import WeatherCard from '../components/WeatherCard';

const Wrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  padding-top: 40px;
  margin-top: 56px; /* Height of Nav */
`;

const Components = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 24px;
  max-width: 1250px;
  margin: 0 auto;
`;

const Homepage = () => (
  <Wrapper>
    <TopNav />
    <Components>
      <WeatherCard />
      <InformationCard />
      <Accordion />
      <SearchCard />
      <Carousel />
      <TodoList />
    </Components>
  </Wrapper>
);

export default Homepage;
