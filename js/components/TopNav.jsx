import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  width: 100vw;
  background-color: #DC143C;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Nav = styled.nav`
  align-items: center;
  padding: 16px;
  max-width: 1250px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const H1 = styled.h1`
  color: white;
  margin: 0;
  font-size: 24px;
  line-height: 1;
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  line-height: 1;
`;

const TopNav = () => (
  <NavContainer>
    <Nav>
      <H1>Component Library</H1>
      <StyledLink to="/about">About</StyledLink>
    </Nav>
  </NavContainer>
);

export default TopNav;
