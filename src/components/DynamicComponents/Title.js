import React from "react";
import styled from "styled-components";
const TitleMain = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  width: 60vw;
  font-weight: bolder;
  color: var(--primary);
  text-align: center;
  margin: 2rem auto;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;
const Title = props => {
  return <TitleMain>{props.children}</TitleMain>;
};

export default Title;
