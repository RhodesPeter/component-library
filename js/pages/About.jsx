import React from 'react';
import styled from 'styled-components';
import TopNav from '../components/TopNav';

const Wrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  padding-top: 40px;
  margin-top: 56px; /* Height of Nav */
`;

const AboutSection = styled.div`
  padding: 0 24px;
  max-width: 1250px;
  margin: 0 auto;

  h1 {
    margin-top: 0;
  }
`;

const About = () => (
  <Wrapper>
    <TopNav />
    <AboutSection>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet Ut enim ad minim veniam Incididunt ut
      labore et dolore</p>
    </AboutSection>
  </Wrapper>
);

export default About;
