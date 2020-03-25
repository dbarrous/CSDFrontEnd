import React from "react";
import styled from "styled-components";
const Image = props => {
  const ImageWrapper = styled.div`
    width: ${props.width};
    height: auto;
    display: flex;
    justify-content: center;
    margin: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  `;
  const InnerImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 2px;
  `;
  return (
    <ImageWrapper>
      <InnerImage src={props.src} alt={props.children} />
    </ImageWrapper>
  );
};

export default Image;
