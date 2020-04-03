import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const Wrapper = styled.div`
  width: 40%;
  height: 225px;
  display: flex;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  background: #23374d;
  color: white;
  margin: 1.5rem;
  border-radius: 3px;
  transition: 0.25s;

  :hover {
    background: var(--primary);
  }
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  @media screen and(max-width:500px) {
    width: 100%;
  }
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;

  @media screen and (max-width: 1000px) {
    width: 95vw;
    height: 250px;
  }
`;
const Name = styled.h3`
  font-size: 1.5rem;
  margin: 1rem;
`;

const StyledImageContainer = styled.div`
  width: 40%;
  max-height: 100%;
  border-radius: 10px;
`;
const StyledTextContainer = styled.div`
  width: 60%;
  height: 100%;
`;
const StyledItem = styled.h4`
  margin: 0.5rem 1rem;
  font-family: Roboto, sans-serif;
  font-size: 0.8rem;
`;
const Position = styled.h4`
  font-family: Roboto;
  font-size: 0.75rem;
  margin: 1rem;
`;
const StyledSpan = styled.span`
  color: var(--accent);
  font-weight: bolder;
`;
const MoreInfo = styled.a`
  text-align: left;
  display: inline-block;
  margin: 1rem;
  cursor: pointer;
  font-weight: bolder;
  font-family: Roboto, sans-serif;
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
  transition: 0.25s;
  :hover {
    color: var(--secondary);
  }
`;

const Icon = styled.span`
  font-family: FontAwesome;
  font-style: normal;
  :hover {
    color: var(--secondary);
  }
`;
const PersonComponent = props => {
  const history = useHistory();

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
        <Name>{`${props.First_Name} ${props.Last_Name}`}</Name>
        <Position>{`${props.Position}`}</Position>
        {props.Phone__Number === "" ? null : (
          <StyledItem>
            <StyledSpan>Phone: </StyledSpan>
            {props.Phone__Number}
          </StyledItem>
        )}
        {props.Email === null ? null : (
          <StyledItem>
            <StyledSpan>Email: </StyledSpan>
            {props.Email}
          </StyledItem>
        )}
        {props.RoomNumb === "" ? null : (
          <StyledItem>
            <StyledSpan>Office: </StyledSpan>
            {props.RoomNumb}
          </StyledItem>
        )}
        <MoreInfo onClick={() => history.push(`/people/${props.id}`)}>
          More Info - <Icon> &#xf05a;</Icon>
        </MoreInfo>

        {/* {props.Office_Hours === "" || props.Office_Hours === null ? null : (
          <h4>{`Office Hours: ${props.Office_Hours}`}</h4>
        )} */}
      </StyledTextContainer>
    </Wrapper>
  );
};

export default PersonComponent;
