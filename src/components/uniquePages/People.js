import React from "react";
import styled from "styled-components";
import Title from "../DynamicComponents/Title";
const PeoplePage = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: 100%;
  grid-template-areas: " DegreesLandingPage Sidebar";

  @media screen and (max-width: 500px) {
    grid-template-columns: 100%;
    grid-template-areas: " DegreesLandingPage";
  }
`;
const PeopleLandingPage = styled.article`
  grid-area: DegreesLandingPage;
  display: flex;
  justify-content: center;
`;

const PeopleSection = styled.section`
  display: flex;
  max-width: 90%;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = styled.nav`
  grid-area: Sidebar;
  background-color: #b2bec3;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const People = () => {
  return (
    <PeoplePage>
      <PeopleLandingPage>
        <PeopleSection>
          <Title>People</Title>
        </PeopleSection>
      </PeopleLandingPage>
      <Sidebar>
        <Title>Filter:</Title>
      </Sidebar>
    </PeoplePage>
  );
};

export default People;
