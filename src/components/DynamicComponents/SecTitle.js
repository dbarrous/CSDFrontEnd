import React from "react";
import styled from "styled-components";
const SecTitle = props => {
  const SecondaryTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--secondary);
    font-family: "Roboto", sans-serif;
    text-align: center;
    margin: 1rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  `;
  return <SecondaryTitle>{props.children}</SecondaryTitle>;
};

export default SecTitle;
