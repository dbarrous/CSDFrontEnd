import React from "react";
import styled from "styled-components";
import NavLogo from "./NavBarComponents/NavLogo";
import NavTabs from "./NavBarComponents/NavTabs";
import { HamburgerArrow } from "react-animated-burgers";

const NavBarContainer = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  grid-template-columns: 0.75fr 1.25fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "Logo Search" "Logo  NavLinks";
  @media screen and (max-width: 1050px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "Logo Cheeseburger" "Logo  Cheeseburger";
  }
`;
const LogoWrapper = styled.section`
  grid-area: Logo;
  width: 100%;
  height: 100%;
`;
const NavTabsWrapper = styled.nav`
  width: 100%;
  height: 100%;
  grid-area: NavLinks;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
const CheeseburgerMenuWrapper = styled.nav`
  width: 100%;
  height: 100%;
  grid-area: Cheeseburger;
  display: none;
  @media screen and (max-width: 1050px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const SearchBar = styled.input`
  background: var(--primary);
  color: white;
  height: 50%;
  border: none;
  font-family: Roboto, sans-serif, FontAwesome;
  width: 15%;
  padding: 5px;
  margin-right: 1rem;
  font-size: 1rem;
  border-radius: 3px;
  transition: 0.25s;
  text-align: right;
  cursor: pointer;
  text-shadow: rgba(0, 0, 0, 0.2);
  ::placeholder {
    font-size: 1.5rem;
    color: var(--background);
  }
  :active {
    width: 30%;
    background: #eee;
    color: var(--primary);
  }
  :focus {
    width: 30%;
    background: #eee;
    color: var(--primary);
    outline: none;
  }
`;
const NavBar = props => {
  return (
    <NavBarContainer>
      <LogoWrapper>
        <NavLogo />
      </LogoWrapper>
      <SearchWrapper>
        <SearchBar placeholder="&#xF002;" />
      </SearchWrapper>
      <NavTabsWrapper>
        <NavTabs />
      </NavTabsWrapper>
      <CheeseburgerMenuWrapper>
        <HamburgerArrow
          isActive={props.menuToggle}
          toggleButton={() =>
            props.setMenuToggle(props.menuToggle === false ? true : false)
          }
          buttonColor="#001f5b"
          barColor="#eee"
        />
      </CheeseburgerMenuWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
