import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  box-shadow: 0px 5px 13px -1px rgba(0,0,0,0.20);
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

  a {
    text-decoration: none;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 24px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  box-shadow: ${props => (props.to === window.location.pathname ? '0px 3px 0px white' : 'none')};
  line-height: 1;
  padding-bottom: 2px;
`;

const TopNav = () => (
  <NavContainer>
    <Nav>
      <H1><Link to="/">Component Library</Link></H1>
      <div>
        <StyledLink to="/">Components</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </div>
    </Nav>
  </NavContainer>
);

export default TopNav;
