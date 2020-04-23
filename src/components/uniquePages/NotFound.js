import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HistoryPageWrapper = styled.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  @media screen and (min-height:900px){
    min-height:1000px;
  }
`;
const HistorySection = styled.section`
  display: flex;
  max-width: 75%;
  flex-direction: column;
  @media screen and (max-width: 430px) {
    max-width: 100%;
  }
`;

const ItemLink = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  text-align: center;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--accent);
  margin: 1rem;
  transition: 0.5s;
  text-decoration: none;
  :hover {
    color: var(--primary);
  }
`;

const StyledH1 = styled.h1`
color:var(--primary);
font-size:4rem;
margin:5rem;
`;

const NotFound = () => {

  return (
    <HistoryPageWrapper>
      <HistorySection>
        <StyledH1>404 Not Found</StyledH1>
        <ItemLink to="/">Go Back to Home Page</ItemLink>
      </HistorySection>
    </HistoryPageWrapper>
  );
};

export default NotFound;
