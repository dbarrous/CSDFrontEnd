import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../../DynamicComponents/Title";
import StyledMarkdown from "../../StyledMarkdown";
import useFetch from "../../useFetch";
import styled from "styled-components";

const ContactPageWrapper = styled.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  @media screen and (min-height: 900px) {
    min-height: 1000px;
  }
`;
const ContactSection = styled.section`
  display: flex;
  max-width: 75%;
  flex-direction: column;
  @media screen and (max-width: 430px) {
    max-width: 100%;
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

const Contact = () => {
  const res = useFetch("https://api.salemstate.edu/main-pages/2");
  return (
    <ContactPageWrapper>
      <ContactSection>
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
        <ItemLink to="/">Go Back</ItemLink>
      </ContactSection>
    </ContactPageWrapper>
  );
};

export default Contact;
