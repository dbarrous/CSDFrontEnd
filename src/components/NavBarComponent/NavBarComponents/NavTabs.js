import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLinksContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyledLi = styled.li`
  margin: 1rem;
  @media screen and (min-width: 1920px) {
    margin: 1.5rem;
  }
  text-align: center;
`;

const StyledLink = styled(NavLink)`
  color: var(--background);
  font-size: 1.25rem;
  font-family: "Roboto", sans-serif;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  transition: 0.25s ease-in-out;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    text-decoration-color: var(--secondary);
  }
  :active {
    text-decoration-color: (--background);
  }
  @media screen and (min-width: 1920px) {
    font-size: 2rem;
  }
`;

const NavTabs = props => {
  const activeStyles = {
    textDecoration: "underline",
    textDecorationColor: "#eee"
  };

  return (
    <NavLinksContainer>
      <StyledLi>
        <StyledLink exact to="/" activeStyle={activeStyles}>
          Home
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/courses" activeStyle={activeStyles}>
          Degrees &amp; Courses
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/advising" activeStyle={activeStyles}>
          Resources &amp; Advising
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/people" activeStyle={activeStyles}>
          People
        </StyledLink>
      </StyledLi>
      {/* <StyledLi>
        <StyledLink exact to="/search" activeStyle={activeStyles}>
          Search
        </StyledLink>
      </StyledLi> */}
    </NavLinksContainer>
  );
};

export default NavTabs;
