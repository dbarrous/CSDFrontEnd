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
  grid-template-areas: "Logo ." "Logo  NavLinks";
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
const NavBar = props => {
  return (
    <NavBarContainer>
      <LogoWrapper>
        <NavLogo />
      </LogoWrapper>
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
