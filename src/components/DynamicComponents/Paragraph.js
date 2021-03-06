import React from "react";
import styled from "styled-components";

const MainParagraph = styled.p`
  font-size: 1.2rem;
  color: #111111;
  font-family: "Perpetua", serif;
  line-height: 1.5rem;
  text-align: center;
  margin: 1.5rem;
`;
const Paragraph = props => {
  return <MainParagraph>{props.children}</MainParagraph>;
};

export default Paragraph;
