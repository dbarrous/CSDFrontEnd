import React from "react";
import { NavLink } from "react-router-dom";
import StyledMarkdown from "../../StyledMarkdown";
import Title from "../../DynamicComponents/Title";
import styled from "styled-components";
import useFetch from "../../useFetch";

const PageWrapper = styled.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  @media screen and (min-height:900px){
    min-height:1000px;
  }
`;
const Section = styled.section`
  display: flex;
  max-width: 75%;
  flex-direction: column;
  @media screen and (max-width: 430px) {
    max-width: 100%;
  }

  ul{
      text-align:center;
      list-style-type:none;
        li{
            margin:1rem;
            font-size:1.2rem;
        }
  }
`;

const ItemLink = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  text-align: center;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--accent);
  margin: 1rem;
  transition: 0.5s;
  text-decoration: none;
  :hover {
    color: var(--primary);
  }
`;

const RetiredDeparted = () => {
  const res = useFetch("http://api.salemstate.edu/retired-departeds/1");

  return (
    <PageWrapper>
      <Section>
        {res.isLoading ? (
          <img
            style={{ width: "100%" }}
            src="/images/pulse.gif"
            alt="loading animation"
          />
        ) : (
          <Title>{res.response.Webpage_Title}</Title>
        )}
        {res.isLoading ? null : (
          <StyledMarkdown source={res.response.Webpage_Text} />
        )}
        <ItemLink to="/people">Go Back</ItemLink>
      </Section>
    </PageWrapper>
  );
};

export default RetiredDeparted;
