import React from "react";
import styled from "styled-components";
const Title = props => {
  const TitleMain = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    font-weight: bolder;
    color: var(--primary);
    text-align: center;
    margin: 2rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  `;
  return <TitleMain>{props.children}</TitleMain>;
};

export default Title;
