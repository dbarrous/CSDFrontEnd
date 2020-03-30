import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 45%;
  height: 30vh;
  display: flex;
  background: ${props =>
    props.status === "Full_Time"
      ? "lightgreen"
      : props.status === "Staff"
      ? "lightblue"
      : props.status === "Adjunct"
      ? "lightorange"
      : props.status === "Alumni"
      ? "red"
      : "lightgray"};
  color: white;
  margin: 1.5rem;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
  h4 {
    margin: 1rem;
  }
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
`;

const StyledImageContainer = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 10px;
`;
const StyledTextContainer = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 10px;
`;

const PersonComponent = props => {
  console.log(props);
  return (
    <Wrapper status={props.Status}>
      <StyledImageContainer>
        {props.Profile_Picture === null ? (
          <img src="/images/defaultAvatar.png" />
        ) : (
          <img src={`http://173.244.1.41:1337${props.Profile_Picture.url}`} />
        )}
      </StyledImageContainer>
      <StyledTextContainer>
        <h4>{`${props.First_Name} ${props.Last_Name}`}</h4>
        {props.Room_Number === null ? null : (
          <h4>{`Room: MH ${props.Room_Number}`}</h4>
        )}

        {props.Office_Hours === "" || props.Office_Hours === null ? null : (
          <h4>{`Office Hours: ${props.Office_Hours}`}</h4>
        )}
      </StyledTextContainer>
    </Wrapper>
  );
};

export default PersonComponent;
