import React from "react";
import styled from "styled-components";
import Title from "../DynamicComponents/Title";
import Image from "../DynamicComponents/Image";
import SecTitle from "../DynamicComponents/SecTitle";
import Paragraph from "../DynamicComponents/Paragraph";

const DegreesPage = styled.section`
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
const DegreesLandingPage = styled.article`
  grid-area: DegreesLandingPage;
  display: flex;
  justify-content: center;
`;

const DegreesSection = styled.section`
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

const Degrees = () => {
  return (
    <DegreesPage>
      <DegreesLandingPage>
        <DegreesSection>
          <Title>Degrees &amp; Courses</Title>
          <Image width="82%" src="images/ssu1.jpg">
            Salem State University
          </Image>
          <SecTitle>
            The Computer Science Major Curriculum: A Rationale
          </SecTitle>
          <Paragraph>
            Computer Science is simultaneously one of the most pragmatic
            disciplines and one of the most conceptual. It must be pragmatic
            because of the rapid pace of technological change. Not only computer
            professionals but virtually everyone who is a more than casual user
            of computers is continually confronted with new tools to be learned
            and skills to be mastered. Members of the technical cadre that
            produce all this technology for us are not exempt: they also must
            learn ever more rapidly evolving methodologies if they are to
            continue to contribute to the progress of the field. These societal
            and professional growth needs require that a Computer Science
            curriculum undergo continual review and evolution. Its graduates
            must be suitably equipped to "hit the ground running" ? to begin
            performing productive work without extensive additional training.
            Therefore, appropriate courses should include treatment of
            up-to-date and in-demand operating systems, languages, tools and
            applications ? the pragmatic features of the discipline.
          </Paragraph>
          <Paragraph>
            On the other hand, the education provided must be conceptual because
            any specific instance of pragmatic content may have a relatively
            short useful life. Keeping up with the latest new tools and methods
            is done most effectively when the conceptual component of the
            undergraduate education has provided a strong base. New developments
            may then be understood not as isolated phenomena but as additions or
            changes within an already well-established broader framework. The
            efforts and costs involved in acquiring new skills are lessened if
            the basic education has provided a sufficiently conceptual
            understanding of the field.
          </Paragraph>
          <Paragraph>
            In order to achieve pragmatism and conceptuality simultaneously,
            Computer Science courses at Salem State College have been designed
            around fundamental ideas and application areas in the field (as
            indicated in the course titles). Concepts are presented through the
            medium of real, current examples, reviewed and updated frequently,
            in order to include the strong pragmatic flavor desired.
          </Paragraph>
        </DegreesSection>
      </DegreesLandingPage>
      <Sidebar>
        <Title>Links:</Title>
      </Sidebar>
    </DegreesPage>
  );
};

export default Degrees;
