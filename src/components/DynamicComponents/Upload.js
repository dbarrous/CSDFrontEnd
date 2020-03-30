import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  width: 45%;
  height: 4rem;
  display:flex;
  background: ${props =>
    props.ext === ".pdf" || props.ext === ".java"
      ? "#FF4136"
      : props.ext === ".php"
      ? "#6435C9"
      : props.ext === ".docx" || props.ext === ".doc" || props.ext === ".css"
      ? "#0074D9"
      : props.ext === ".js"
      ? "#FFBD28"
      : "#B10DC9"};
}
  color: #eee;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 1rem;
  transition:0.25s;
  :hover{
    cursor:pointer;
    background:#5F8FB4;
    div{
      a {
        color: #5f8fb4;
      }
    }
  }
  @media screen and (max-width:1000px){
    width:80%;
  }
  @media screen and (max-width:430px){
    width:90%;
  }
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #B3B3B3;
`;
const InnerWrapper = styled.div`
  width: 97.5%;
  height: 3rem;
  display: flex;
  background: #eee;
  border-radius: 5px;
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
  transition:0.25s;
  text-align: center;
  color: ${props =>
    props.ext === ".pdf" || props.ext === ".java"
      ? "#FF4136"
      : props.ext === ".php"
      ? "#6435C9"
      : props.ext === ".docx" || props.ext === ".doc" || props.ext === ".css"
      ? "#0074D9"
      : props.ext === ".js"
      ? "#FFBD28"
      : "#B10DC9"};

      
}

  :visited {
    color: ${props =>
      props.ext === ".pdf" || props.ext === ".java"
        ? "#FF4136"
        : props.ext === ".php"
        ? "#6435C9"
        : props.ext === ".docx" || props.ext === ".doc" || props.ext === ".css"
        ? "#0074D9"
        : props.ext === ".js"
        ? "#FFBD28"
        : "#B10DC9"};
  }
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
    <Wrapper ext={props.ext} href={props.url}>
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
