import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../DynamicComponents/Title";
import Paragraph from "../DynamicComponents/Paragraph";
import SecTitle from "../DynamicComponents/SecTitle";
import styled from "styled-components";

const HistoryPageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const HistorySection = styled.section`
  display: flex;
  max-width: 75%;
  flex-direction: column;
  @media screen and (max-width: 430px) {
    max-width: 100%;
  }
`;
const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: var(--primary);
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin: 1rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
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
const History = () => {
  return (
    <HistoryPageWrapper>
      <HistorySection>
        <Title>Our History</Title>
        <SecTitle>
          Change as a Constant: Computer Science at Salem State College
        </SecTitle>
        <AuthorName>by Robert E. Briney, Professor Emeritus</AuthorName>
        <Paragraph>
          For more than 30 years, the Computer Science Department at Salem State
          has offered the opportunity for studying a technology as restless and
          changeable as any subject matter in the curriculum. The academic
          discipline of Computer Science has always been to a significant extent
          driven by existing hardware and software technology. A theoretical
          model of machine computation was developed and studied by the British
          mathematician Alan Turing in 1936, before computers in the modern
          sense existed. When the use of computers began to spread by the end of
          World War II, academic treatment tended to deal with practical
          matters: how to build them (the engineering aspect) or how to use them
          (learning computer languages and writing programs to solve specific
          problems). And both aspects were based on the then-current state of
          affairs: a computer was a mainframe, a large, expensive machine which
          could be used by only one person at a time to solve one problem at a
          time. The idea of multiple users sharing a machine did not become a
          practical fact until the early 1960s, and when it did, entire new
          subject areas were added to the typical computer curriculum. At about
          the same time, Computer Science became recognized as a separate
          academic discipline, at least at the graduate level. (The first Ph.D.
          in Computer Science was awarded in 1965 at the University of
          Pennsylvania.)
        </Paragraph>
        <Paragraph>
          When the first computer courses at Salem State College were introduced
          in the early 1970s, the Computer Science Department had not yet been
          created, so the courses carried an EDU (Education) or IDS
          (Interdisciplinary) designation. (Before on-campus computer facilities
          became available, the courses were taught using a borrowed computer
          located in a former mattress factory on Route 128 outside of Salem.)
          These courses were based on the one-user-at-a-time model. Shortly
          after the establishment of the Computer Science Department in the Fall
          of 1977, time-sharing became possible when the higher education Board
          of Regents established the Regents Computer Network (later known as
          the Massachusetts Educational Computer Network), which served all of
          the Massachusetts state colleges from a central installation on the
          top floors of a bank building on Causeway Street in Boston, next to
          the old North Station. But this was still mainframe-based, with
          programs and data supplied in the form of thick decks of punched
          cards, so the Department's computer lab was filled with cumbersome
          (and very loud) key-punch machines. Teletype machines were later added
          to allow interactive communication with the remote mainframe. The MECN
          eventually fell out of use and was dismantled when most of the state
          colleges acquired their own computer facilities. Salem State College
          leased a VAX 11/750 from Digital Equipment Corporation for the use of
          the Computer Science Department, and a department faculty member
          served as system administrator. For a short time there was also a
          classroom full of DEC Rainbow PCs, used mainly for teaching courses in
          computer graphics. Two or three years later the Computer Science
          Department switched to the time-sharing Alpha system set up by the
          Geography Department's Digital Geography Laboratory.
        </Paragraph>
        <Paragraph>
          Personal computers became widely available in the late 1970s, and
          first showed up for general student use on the Salem State campus in
          the Computer Literacy Laboratory, set up and supervised by Dr. Alice
          Stadthaus of the Interdisciplinary Studies Department. The Computer
          Science Department later set up its own network of IBM-compatible PCs,
          the Packet LAN (now updated and renamed CSFleet), and that has served
          not only Computer Science majors and minors but also the students in
          the department's computer literacy courses and service courses ever
          since.
        </Paragraph>
        <Paragraph>
          The migration from mainframes to PCs and from stand-alone computers to
          ones linked on a network, the introduction of multi-processor
          computers and parallel computing, the development of object-oriented
          software technology, and the current overwhelming influence of the
          Internet and the World Wide Web, have affected the content and
          delivery of virtually every course in the department's curriculum and
          have led to the introduction of new courses and new areas of
          specialization. There is no reason to think that these circumstances
          will change in the foreseeable future.
        </Paragraph>
        <Paragraph>
          Nor is there any reason to suppose that simply keeping up with new
          developments in technology will suffice to define a vital curriculum,
          either for Computer Science majors or for a general computer-literate
          population. Having the intellectual tools that make "keeping up"
          possible (i.e., knowing how to "keep up") is equally important.
          Professor Kasprzyk's discussion of "computer literacy" deals with this
          point in more detail. Thinking of computer literacy as merely
          skills-of-the-moment is both short-sighted and crippling. A person who
          has only current skills, without any of the conceptual background to
          place these skills in context, is likely to have trouble adapting to
          the inevitable rapid changes in computer technology and usage.
          Numerous discussions in professional journals in computer science and
          in computer science education have taken the same view. For this
          reason, adaptability to new hardware, new computer languages, new
          design techniques, and new application areas has become an important
          component of all courses in the Computer Science curriculum.
        </Paragraph>
        <Paragraph>
          In the area of core requirements in the general curriculum, the
          requirements in reading, writing, and mathematics represent skills
          that are not limited to the moment or to specialized circumstances,
          but are abilities that one can expect to need and to build on
          continually and in many different circumstances. With the
          pervasiveness of computers in today's society, and the rapid pace at
          which computer technology changes, genuine computer literacy skills
          provide the same foundation for growth and adaptability. In addition
          to the body of courses provided for Computer Science majors and
          minors, the Computer Science Department offers a variety of courses in
          various aspects of computer literacy and information technology.
        </Paragraph>
        <ItemLink to="/">Go Back</ItemLink>
      </HistorySection>
    </HistoryPageWrapper>
  );
};

export default History;
