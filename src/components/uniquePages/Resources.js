import React from "react";
import styled from "styled-components";
import Title from "../DynamicComponents/Title";
import Image from "../DynamicComponents/Image";

const ResourcesPage = styled.section`
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
const ResourcesLandingPage = styled.article`
  grid-area: DegreesLandingPage;
  display: flex;
  justify-content: center;
`;

const ResourcesSection = styled.section`
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
const Resources = () => {
  return (
    <ResourcesPage>
      <ResourcesLandingPage>
        <ResourcesSection>
          <Title>Resources &amp; Advising</Title>
          <Image width="82%" src="images/ssu2.jpg">
            Salem State University
          </Image>
        </ResourcesSection>
      </ResourcesLandingPage>
      <Sidebar>
        <Title>Links:</Title>
      </Sidebar>
    </ResourcesPage>
  );
};

export default Resources;
