import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const Wrapper = styled.div`
  width: 45%;
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

  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
  @media screen and (max-width: 1000px) {
    width: 95vw;
    height: 250px;
  }
  @media screen and (min-height: 900px) {
    min-height: 275px;
  }
  @media screen and (min-width: 2000px) {
    width: 40%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 220px;
    margin: 0.5rem;
  }
`;
const Name = styled.h3`
  font-size: 1.5rem;
  margin: 1rem;
  @media screen and (min-width: 2000px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.25rem;
    margin: 1rem 0.5rem;
  }
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
const StyledItem = styled.a`
  margin: 0.5rem 1rem;
  display: block;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-size: 0.8rem;
  color: var(--background);
  @media screen and (min-width: 2000px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 450px) {
    margin: 0.5rem 0.5rem;
  }
`;
const Position = styled.h4`
  font-family: Roboto, sans-serif;
  font-size: 0.75rem;
  margin: 1rem;
  @media screen and (min-width: 2000px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 450px) {
    margin: 0.75rem 0.5rem;
  }
`;
const StyledSpan = styled.span`
  color: var(--accent);
  font-weight: bolder;
  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
  }
`;
const MoreInfo = styled.h4`
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
  @media screen and (min-width: 2000px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 450px) {
    margin: 0.75rem 0.5rem;
  }
`;

const Icon = styled.span`
  font-family: FontAwesome;
  font-style: normal;
  :hover {
    color: var(--secondary);
  }
`;
const PersonComponent = (props) => {
  const history = useHistory();

  return (
    <Wrapper status={props.Status}>
      <StyledImageContainer>
        {props.Profile_Picture === null ? (
          <img src="/images/defaultAvatar.png" alt="Default Avatar" />
        ) : (
          <img
            src={`https://api.salemstate.edu${props.Profile_Picture.url}`}
            alt={`${props.Last_Name}'s Profile`}
          />
        )}
      </StyledImageContainer>
      <StyledTextContainer>
        <Name>{`${props.First_Name} ${props.Last_Name}`}</Name>
        <Position>{`${props.Position}`}</Position>
        {props.Phone__Number === "" || props.Phone__Number === null ? null : (
          <StyledItem href={`tel: ${props.Phone__Number}`}>
            <StyledSpan>Phone: </StyledSpan>
            {props.Phone__Number}
          </StyledItem>
        )}
        {props.Email === null || props.Email === "" ? null : (
          <StyledItem href={`mailto: ${props.Email}`}>
            <StyledSpan>Email: </StyledSpan>
            {props.Email}
          </StyledItem>
        )}
        {props.RoomNumb === "" || props.RoomNumb === null ? null : (
          <StyledItem>
            <StyledSpan>Office: </StyledSpan>
            {props.RoomNumb}
          </StyledItem>
        )}
        {props.Page_Info === "" || props.Page_Info === null ? null : (
          <MoreInfo onClick={() => history.push(`/people/${props.id}`)}>
            More Info - <Icon> &#xf05a;</Icon>
          </MoreInfo>
        )}

        {/* {props.Office_Hours === "" || props.Office_Hours === null ? null : (
          <h4>{`Office Hours: ${props.Office_Hours}`}</h4>
        )} */}
      </StyledTextContainer>
    </Wrapper>
  );
};

export default PersonComponent;
