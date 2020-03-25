import React from "react";
import { NavLink } from "react-router-dom";

import Title from "../DynamicComponents/Title";
import Paragraph from "../DynamicComponents/Paragraph";
import SecTitle from "../DynamicComponents/SecTitle";
import styled from "styled-components";
const MissionPageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const MissionSection = styled.section`
  display: flex;
  max-width: 75%;
  flex-direction: column;
  @media screen and (max-width: 430px) {
    max-width: 100%;
  }
`;
const StyledList = styled.ul`
  margin: 1rem;
`;
const ListItem = styled.li`
  margin: 0.5rem;
  color: var(--primary);
`;
const ItemLink = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  text-align: center;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--secondary);
  margin: 1rem;
  transition: 0.5s;
  text-decoration: none;
  :hover {
    color: var(--primary);
  }
`;
const Mission = () => {
  return (
    <MissionPageWrapper>
      <MissionSection>
        <Title>Our Mission</Title>
        <SecTitle>Computer Science</SecTitle>
        <Paragraph>
          Computer Science is simultaneously one of the most pragmatic
          disciplines and one of the most conceptual. It must be pragmatic
          because of the rapid pace of technological change. Not only computer
          professionals but also virtually everyone who is a more than casual
          user of computers is continually confronted with new tools to be
          learned and skills to be mastered. Members of the technical cadre that
          produce all this technology for us are not exempt: they also must
          learn ever more rapidly evolving methodologies if they are to continue
          to contribute to the progress of the field. These societal and
          professional growth needs require that a Computer Science curriculum
          undergo continual review and evolution. Its graduates must be suitably
          equipped to "hit the ground running" - to begin performing productive
          work without extensive additional training. Therefore, appropriate
          courses should include treatment of up-to-date and in-demand operating
          systems, languages, tools and applications - the pragmatic features of
          the discipline. On the other hand, the education provided must be
          conceptual because any specific instance of pragmatic content may have
          a relatively short useful life. Keeping up with the latest new tools
          and methods is done most effectively when the conceptual component of
          the undergraduate education has provided a strong base. New
          developments may then be understood not as isolated phenomena but as
          additions or changes within an already well-established broader
          framework. The efforts and costs involved in acquiring new skills are
          lessened if the basic education has provided a sufficiently conceptual
          understanding of the field. In order to achieve pragmatism and
          conceptuality simultaneously, Computer Science courses at Salem State
          University have been designed around fundamental ideas and application
          areas in the field (as indicated in the course titles). Concepts are
          presented through the medium of real, current examples, reviewed and
          updated frequently, in order to include the strong pragmatic flavor
          desired.
        </Paragraph>
        <SecTitle>
          College of Arts and Sciences (host College of the Computer Science
          Department)
        </SecTitle>
        <Paragraph>
          The mission of the College of Arts and Sciences at Salem State
          University is central to the mission of the entire institution. The
          college offers liberal arts and professional degree programs and, at
          the same time, fulfills the broader purposes of general liberal
          education. The College thus plays an important part in the
          intellectual, aesthetic, and personal growth of all students at the
          university, and it prepares them to be responsible members of a
          changing pluralistic society. Through its attention both to the
          particular and to the more universal aspects of education, the College
          of Arts and Sciences prepares students to meet the complex, often
          unpredictable challenges of the future and to appreciate the
          satisfactions of a full life. Specifically, the Mission of the College
          of Arts and Sciences is to:
          <StyledList>
            <ListItem>
              - Assist students in the development of their mental and physical
              abilities. stimulate students' ability to think critically and to
              communicate clearly. encourage an understanding of the connections
              between human beings and their physical environment.
            </ListItem>
            <ListItem>
              - Prepare students for responsible participation in the process of
              human interaction, from the personal to the global. provide for
              familiarity with methods of inquiry and means of expression in the
              arts and sciences.
            </ListItem>
            <ListItem>
              - Develop an understanding of the historical and cultural
              backgrounds of the arts and sciences.
            </ListItem>
            <ListItem>
              - Support other areas of the college in their efforts on behalf of
              students. promote scholarly and creative activity among all
              members of the college community.
            </ListItem>
            <ListItem>
              - Foster free and informed explorations across disciplinary lines
              and among diverse groups.
            </ListItem>
            <ListItem>
              - Promote, throughout the college, a sense of community and mutual
              respect. provide an environment that encourages the personal
              flexibility conducive to emotional and intellectual growth.
            </ListItem>
            <ListItem>
              - Continue to explore, in the spirit of liberal education, new
              avenues of learning and to take advantage of unexpected
              opportunities as they occur.
            </ListItem>
          </StyledList>
        </Paragraph>
        <ItemLink to="/">Go Back</ItemLink>
      </MissionSection>
    </MissionPageWrapper>
  );
};

export default Mission;
