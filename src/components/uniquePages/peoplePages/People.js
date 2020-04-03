import React from "react";
import styled from "styled-components";
import Title from "../../DynamicComponents/Title";
import useFetch from "../../useFetch";
import PersonComponent from "../../DynamicComponents/PersonComponent";

const PeoplePage = styled.section`
  width: 100%;
  min-height: 600px;
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
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const PersonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Sidebar = styled.nav`
  grid-area: Sidebar;
  background-color: var(--secondary);
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const SidebarHeader = styled.h4`
  color: var(--background);
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem;
  font-family: "Roboto", Arial, sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const People = () => {
  const res = useFetch("http://173.244.1.41:1337/people");

  return (
    <PeoplePage>
      <PeopleLandingPage>
        <PeopleSection>
          <Title>People</Title>
          <PersonWrapper>
            {res.isLoading === false
              ? res.response.map(item => <PersonComponent {...item} />)
              : null}
          </PersonWrapper>
        </PeopleSection>
      </PeopleLandingPage>
      <Sidebar>
        <SidebarHeader>Filter:</SidebarHeader>
        {/* <StyledSideMenu>
          <Item>Hello</Item>
        </StyledSideMenu> */}
      </Sidebar>
    </PeoplePage>
  );
};

export default People;
