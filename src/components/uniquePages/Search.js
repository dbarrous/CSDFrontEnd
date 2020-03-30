import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Title from "../DynamicComponents/Title";
import styled from "styled-components";

const SearchPageWrapper = styled.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
`;
const SearchSection = styled.section`
  display: flex;
  max-width: 75%;
  flex-direction: column;
  align-items: center;
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
const StyledInput = styled.input`
  width: 50vw;
  height: 12vh;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgba(200, 200, 200, 0.3);
  font-size: 1.5rem;
  border: 0px;
  padding-left: 10px;
  @media screen and (max-width: 500px) {
    width: 60vw;
    font-size: 0.7 rem;
  }
`;
const StyledButton = styled.button`
  width: 10vw;
  height: 12vh;
  font-size: 1rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  background: var(--secondary);
  color: var(--background);
  transition: 0.5s;
  :hover {
    cursor: pointer;
    background: var(--accent);
    color: var(--primary);
  }
  :active {
    background: var(--background);
    transition: 0s;
  }
  @media screen and (max-width: 500px) {
    width: 14vw;
    font-size: 0.7 rem;
  }
`;
const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 5rem 0;
`;
const History = () => {
  const [search, setSearch] = useState("");

  return (
    <SearchPageWrapper>
      <SearchSection>
        <Title>Search:</Title>
        <StyledForm>
          <StyledInput
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Enter Search Query Here..."
          />
          <br />
          <StyledButton>Search</StyledButton>
        </StyledForm>
        <br />
        <ItemLink to="/">Go Back to Home Page</ItemLink>
      </SearchSection>
    </SearchPageWrapper>
  );
};

export default History;
