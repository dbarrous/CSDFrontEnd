import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../../DynamicComponents/Title";
import StyledMarkdown from "../../StyledMarkdown";
import styled from "styled-components";
import useFetch from "../../useFetch";
const HistoryPageWrapper = styled.section`
  width: 100%;
  min-height: 600px;
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

const History = () => {
  const res = useFetch("http://173.244.1.41:1337/main-pages/3");
  return (
    <HistoryPageWrapper>
      <HistorySection>
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
      </HistorySection>
    </HistoryPageWrapper>
  );
};

export default History;
