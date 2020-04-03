import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  width: 45%;
  height: 4rem;
  display: flex;
  background: var(--secondary);
  color: #eee;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 1rem;
  transition: 0.25s;
  :hover {
    cursor: pointer;
    position: relative;
    bottom: 2px;
    -webkit-box-shadow: 0 3px 2px #777;
    -moz-box-shadow: 0 3px 2px #777;
    box-shadow: 0 3px 2px #777;
    background: var(--accent);
    div {
      p {
        color: var(--accent);
      }
    }
  }
  :active {
    position: relative;
    bottom: -2px;
    box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 430px) {
    width: 90%;
  }
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
`;
const InnerWrapper = styled.div`
  width: 95%;
  height: 3rem;
  display: flex;
  background: #eee;
  border-radius: 2.5px;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;
const FileName = styled.p`
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  transition: 0.25s;
  text-align: center;
  color: var(--secondary);
`;
const NameWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledIcon = styled.img`
  width: auto;
  height: 90%;
  margin-left: 3px;
`;
const Upload = props => {
  const iconPicker = ext => {
    if (ext === ".pdf") {
      return "/images/logos/pdf.png";
    } else if (ext === ".docx") {
      return "/images/logos/docx.png";
    } else if (ext === ".doc") {
      return "/images/logos/doc.png";
    } else if (ext === ".php") {
      return "/images/logos/php.png";
    } else if (ext === ".js") {
      return "/images/logos/js.png";
    } else if (ext === ".css") {
      return "/images/logos/css.png";
    } else if (ext === ".java") {
      return "/images/logos/java.png";
    } else if (ext === ".c") {
      return "/images/logos/c.png";
    } else {
      return "/images/logos/file.png";
    }
  };

  return (
    <Wrapper ext={props.ext} href={props.url} target="_blank">
      <InnerWrapper>
        <StyledIcon src={iconPicker(props.ext)} />

        <NameWrapper>
          <FileName ext={props.ext}>{props.children}</FileName>
        </NameWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Upload;
