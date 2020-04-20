import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Home = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40% 60%;
  grid-template-areas: "News" "Links";
  @media screen and (max-width: 900px) {
    grid-template-rows: 30% 70%;
  }

  @media screen and (max-width: 650px) {
    grid-template-rows: 20% 80%;
  }
  @media screen and (max-width: 400px) {
    grid-template-rows: 15% 85%;
  }
  @media screen and (min-height: 900px) {
    min-height: 1000px;
  }
`;
const News = styled.div`
  grid-area: News;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Links = styled.div`
  grid-area: Links;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledIframe = styled.iframe`
height: 100%;
width: 100%;
overflow: hidden;


@media screen and (max-width: 755px) {
  -moz-transform: scale(0.8, 0.8);
  -webkit-transform: scale(0.8, 0.8);
  -o-transform: scale(0.8, 0.8);
  -ms-transform: scale(0.8, 0.8);
  transform: scale(0.8, 0.8);
}

@media screen and (max-width:400px){
  -moz-transform: scale(0.7, 0.7);
  -webkit-transform: scale(0.7, 0.7);
  -o-transform: scale(0.7, 0.7);
  -ms-transform: scale(0.7, 0.7);
  transform: scale(0.7, 0.7);
}

}
`;
const PageHeader = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  color: var(--primary);
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 755px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;
const NewsWrapper = styled.div`
  width: 800px;
  height: 380px;
  overflow: hidden;
  @media screen and (max-width: 755px) {
    width: 495px;
    height: 350px;
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 420px) {
    width: 400px;
  }
  @media screen and (max-width: 390px) {
    width: 375px;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 2600px) {
    width: 60vw;
  }
  @media screen and (max-width: 2000px) {
    width: 70vw;
  }
  @media screen and (max-width: 1600px) {
    width: 90vw;
  }
  @media screen and(max-width: 900px) {
    width: 80vw;
    margin-top: 4rem;
  }
  @media screen and (max-width: 430px) {
    width: 100vw;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  min-height: 400px;
  margin: 1.5rem 0;
  align-items: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const ItemTitle = styled.h3`
  margin-top: 0.8rem;
  font-size: 1.4rem;
  font-weight: bolder;
  color: #d24700;
`;

const ItemParagraph = styled.p`
  font-size: 1rem;
  font-weight: regular;
  color: var(--primary);
  margin-top: 1rem;
`;

const ItemImage = styled.img`
  width: 55%;
`;

const ItemLink = styled(NavLink)`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  color: var(--secondary);
  margin-top: 1rem;
  text-decoration: underline;
  transition: 0.5s;
  :hover {
    color: var(--primary);
  }
`;

const HomePage = () => {
  return (
    <Home>
      <News>
        <NewsWrapper>
          <StyledIframe src="http://weblab.salemstate.edu/~coordenador/ToolBox/carousel.php" />
        </NewsWrapper>
      </News>
      <Links>
        <PageHeader>Welcome to the Computer Science Department</PageHeader>
        <LinksWrapper>
          <ItemContainer>
            <ItemImage src="images/ourMission.png" />
            <ItemTitle>Mission Statement</ItemTitle>
            <ItemParagraph>
              Salem State's mission is to provide a high quality,
              student-centered education that prepares a diverse community of
              learners to contribute responsibly and creatively to a global
              society, and serve as a resource to advance the region's cultural,
              social and economic development.
            </ItemParagraph>
            <ItemLink to="/mission">Learn More</ItemLink>
          </ItemContainer>
          <ItemContainer>
            <ItemImage src="images/ourHistory.png" />
            <ItemTitle>History of Department</ItemTitle>
            <ItemParagraph>
              For more than 30 years, the Computer Science Department at Salem
              State has offered the opportunity for studying a technology as
              restless and changeable as any subject matter in the curriculum.
            </ItemParagraph>
            <ItemLink to="/history">Learn More</ItemLink>
          </ItemContainer>
          <ItemContainer>
            <ItemImage src="images/ourContact.png" />
            <ItemTitle>Contact Information</ItemTitle>
            <ItemParagraph>
              You can send an email directly to the chairperson of the
              department for inquries about Salem State's Computer Science
              Department.
              <br />
            </ItemParagraph>
            <ItemLink to="/contact">Learn More</ItemLink>
          </ItemContainer>
        </LinksWrapper>
      </Links>
    </Home>
  );
};

export default HomePage;
