import React from "react";
import useFetch from "../../useFetch";
import styled from "styled-components";
import StyledMarkdown from "../../StyledMarkdown";
import { NavLink } from "react-router-dom";
const PeoplePageWrapper = styled.section`
  width: 100%;
  min-height: 600px;
  @media screen and (min-height:900px){
    min-height:1000px;
  }
  
`;
const PeopleSection = styled.section`
width:80%;
margin:0 auto;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  grid-template-areas: "MainInfo SecInfo";
  @media screen and (max-width: 430px) {
    max-width: 100%;
  }

  @media screen and (max-width: 800px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

const ItemLink = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  text-align: center;
  display: block;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--secondary);
  margin: 1rem;
  transition: 0.5s;
  text-decoration: none;
  :hover {
    color: var(--primary);
  }
`;

const Name = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: bolder;
  font-size: 3rem;
  margin: 1.5rem;
  color: var(--primary);
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const ProfilePicture = styled.img`
  width: 20vw;
  height: auto;
  margin: 1rem auto;
  border-radius: 3px;
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
`;
const Position = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 1.2rem;
  color: var(--accent);
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;
const SecondaryText = styled.a`
  font-family: Roboto, serif;
  font-size: 1.2rem;
  color: var(--secondary);
  text-align: center;
  text-decoration:none;
  margin: 0.75rem;
`;

const AccentSpan = styled.span`
  color: var(--accent);
`;

const MainInfo  = styled.div`
grid-area:MainInfo;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
const SecInfo = styled.div`

grid-area:SecInfo;
width:100%;
height:100%;
margin:1rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const StyledHR = styled.hr`
width:100%;

`;
const PeopleTemplate = ({ match }) => {
  const res = useFetch(`http://173.244.1.41:1337/people/${match.params.id}`);
 
  return (
    <PeoplePageWrapper>
      <PeopleSection>
        <MainInfo>
        {res.isLoading ? (
          <img
            style={{ width: "100%" }}
            src="/images/pulse.gif"
            alt="loading animation"
          />
        ) : (
          <Name>{`${res.response.First_Name} ${res.response.Last_Name}`}</Name>
        )}

        {res.isLoading ? null : <Position>{res.response.Position}</Position>}

        {res.isLoading ? null : res.response.Profile_Picture === null ? null : (
          <ProfilePicture
            src={`http://173.244.1.41:1337${res.response.Profile_Picture.url}`}
            alt={`${res.response.Last_Name}'s Profile Picture`}
          />
        )}

        {res.isLoading || res.response.RoomNumb === null ||res.response.RoomNumb=== "" ? null : (
          <SecondaryText>
            <AccentSpan>Office: </AccentSpan>
            {res.response.RoomNumb}
          </SecondaryText>
        )}
        {res.isLoading || res.response.Email === null ||res.response.Email=== ""? null : (
          <SecondaryText href={`mailto: ${res.response.Email}`}>
            <AccentSpan>Email: </AccentSpan>
            {res.response.Email}
          </SecondaryText>
        )}
        {res.isLoading || res.response.Phone__Number === null ||res.response.Phone__Number=== ""? null : (
          <SecondaryText href={`tel:${res.response.Phone__Number}`}>
            <AccentSpan>Phone Number: </AccentSpan>
            {res.response.Phone__Number}
          </SecondaryText>
        )}
          <StyledHR/>
         <ItemLink to="/people">Go Back to Faculty</ItemLink>
         <StyledHR/>
        </MainInfo>

        <SecInfo>{res.isLoading ? null : (
          <StyledMarkdown source={res.response.Page_Info} />
        )}</SecInfo>
        

       
      </PeopleSection>
    </PeoplePageWrapper>
  );
};

export default PeopleTemplate;
