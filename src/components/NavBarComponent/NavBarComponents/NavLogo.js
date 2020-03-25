import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const Logo = styled.picture`
  display: flex;
  align-items: center;
  width: 95%;
  height: 90%;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  filter: drop-shadow(5px 5px 5px #222);
`;
const NavLogo = props => {
  return (
    <LogoContainer>
      <Logo>
        <Link to="/">
          <source srcSet="images/logo.webp" />
          <source srcSet="images/logo.svg" />
          <Image srcSet="images/logo.png" alt="Salem State Logo" />
        </Link>
      </Logo>
    </LogoContainer>
  );
};

export default NavLogo;
