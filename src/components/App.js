import React, { useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { HamburgerArrow } from "react-animated-burgers";

import cssReset from "./cssReset";
import cssCustomVariables from "./cssCustomVariables";
import Routes from "./Routes.js";
import NavBar from "./NavBarComponent/NavBar";

const CssReset = createGlobalStyle`${cssReset}`;
const CssCustomVariables = createGlobalStyle`${cssCustomVariables}`;

const Grid = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.section`
  background-color: var(--primary);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;
const Main = styled.div`
  min-height:700px
  width:100%
  background-color: var(--background);
  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms ease-in-out;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms ease-in-out;
  }
`;
const Footer = styled.section`
  background-color: var(--secondary);
  min-height: 12vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

  grid-template-areas: "FirstHalf SecondHalf";
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "FirstHalf" "SecondHalf";
    min-height: 30vh;
    line-height: 25px;
  }
`;

const OffCanvasMenuWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2.75fr;
  grid-template-areas: "BurgerMenu" "NavLinks";
  background: var(--primary);
  color: var(--background);
`;

const NavLinksContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  grid-area: NavLinks;
  flex-direction: column;
`;

const BurgerBar = styled.div`
  grid-area: BurgerMenu;
  width: 100%;
`;

const StyledLi = styled.li`
  margin: 1rem;
  @media screen and (min-width: 1920px) {
    margin: 1.5rem;
  }
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
const FooterFirstHalf = styled.div`
  width: 100%;
  height: 100%;
  grid-area: FirstHalf;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 450px) {
    align-items: center;
  }
`;
const FooterSecondHalf = styled.div`
  width: 100%;
  height: 100%;
  grid-area: SecondHalf;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 450px) {
    align-items: center;
  }
`;
const FooterText = styled.p`
  font-family: "Perpetua", serif;
  font-size: 0.8rem;
  color: var(--background);
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  margin-top: 2px;
  @media screen and (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;

const App = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const activeStyles = {
    textDecoration: "underline",
    textDecorationColor: "#eee"
  };

  return (
    <>
      <Router>
        <CssReset />
        <CssCustomVariables />
        <OffCanvas
          width={300}
          transitionDuration={300}
          effect={"parallax"}
          position={"right"}
          isMenuOpened={menuToggle}
        >
          <OffCanvasBody>
            <Grid>
              <Header>
                <NavBar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
              </Header>
              <Main>
                <Routes />
              </Main>
              <Footer>
                <FooterFirstHalf>
                  <FooterText>Salem State University</FooterText>
                  <FooterText>Computer Science Department</FooterText>
                  <FooterText>MH 207</FooterText>
                  <FooterText>
                    352 Lafayette Street, Salem, MA 01970-5353
                  </FooterText>
                </FooterFirstHalf>

                <FooterSecondHalf>
                  <FooterText>
                    Department Office Administrator: (978) 542-6256
                  </FooterText>
                  <FooterText>
                    Department Chairperson: (978) 542-6256
                  </FooterText>
                  <FooterText>Department Fax: (978) 542-7048</FooterText>
                </FooterSecondHalf>
              </Footer>
            </Grid>
          </OffCanvasBody>
          <OffCanvasMenu>
            <OffCanvasMenuWrapper>
              <BurgerBar>
                <HamburgerArrow
                  isActive={menuToggle}
                  toggleButton={() =>
                    setMenuToggle(menuToggle === false ? true : false)
                  }
                  buttonColor="#001f5b"
                  barColor="#eee"
                  buttonStyle={{ margin: "2.5px" }}
                />
              </BurgerBar>

              <NavLinksContainer>
                <StyledLi>
                  <StyledLink exact to="/" activeStyle={activeStyles}>
                    Home
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink exact to="/courses" activeStyle={activeStyles}>
                    Degrees &amp; Courses
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink exact to="/resources" activeStyle={activeStyles}>
                    Resources &amp; Advising
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink exact to="/people" activeStyle={activeStyles}>
                    People
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink exact to="/search" activeStyle={activeStyles}>
                    Search
                  </StyledLink>
                </StyledLi>
              </NavLinksContainer>
            </OffCanvasMenuWrapper>
          </OffCanvasMenu>
        </OffCanvas>
      </Router>
    </>
  );
};

export default App;
