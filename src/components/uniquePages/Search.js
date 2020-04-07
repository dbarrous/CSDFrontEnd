import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Title from "../DynamicComponents/Title";
import styled from "styled-components";
import useFetch from "../useFetch"
import  Fuse  from "fuse.js";

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
const SearchLink = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  text-align: center;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--primary);
  margin: 1rem;
  transition: 0.5s;
  text-decoration: none;
  :hover {
    color: var(--accent);
  }
  te
`;
const StyledInput = styled.input`
  width: 50vw;
  height: 12vh;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
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
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: none;
  background: var(--secondary);
  color: var(--background);
  transition: 0.5s;
  :hover {
    cursor: pointer;
    background: var(--accent);
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
  
  display: flex;
  margin: 1rem 0;
`;
const StyledNotFound = styled.h1`
font-family:Roboto,sans-serif;
font-size:2rem;
color:var(--accent);
`;
const StyledLi = styled.li`
list-style-type: decimal;
color:var(--primary);

`;
const StyledOl = styled.ol`
width:600px;
height:80%;
@media screen and (max-width:600px){
  width:90vw;

}
`;

const Results = styled.h3`
font-size:1.3rem;
width:100%;
font-family:Roboto,sans-serif;
color:var(--secondary);
text-align:center;
`;
const StyledSpan = styled.span`
color:var(--secondary);
font-size:1rem;
`;
const Search = ({match}) => {
  const degrees = useFetch("http://173.244.1.41:1337/degree-Pages");
  const advising = useFetch("http://173.244.1.41:1337/advising-Pages");
  const options = {
    isCaseSensitive: false,
    findAllMatches: false,
    includeMatches: false,
    includeScore: false,
    useExtendedSearch: false,
    minMatchCharLength: 1,
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    keys: [
      "Webpage_Title"
    ]
  };
  let fuse;
  let SearchArray;

  const [keyword,setKeyword ] = React.useState(match.params.id);
  if(!degrees.isLoading && !advising.isLoading){
   fuse = new Fuse(degrees.response.concat(advising.response), options);
   SearchArray = fuse.search(keyword);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    SearchArray = fuse.search(keyword);
    console.log(SearchArray);

  }

  
  return (
    <SearchPageWrapper>
    
      <SearchSection>
        <Title>Search:</Title>
        <StyledForm onSubmit={(e)=>handleSubmit(e)}>
          <StyledInput
            name="search"
            value = {keyword}
            onClick={()=>console.log()}
            onChange = {(e)=> setKeyword(e.target.value)}
            placeholder="Enter Search Query Here..."
          />
          <br />
          <StyledButton>Search</StyledButton>
        </StyledForm>
        <br />
        <StyledOl>
          <Results>Search Results</Results> 
          {!degrees.isLoading && SearchArray !== undefined ? SearchArray.map(page=><StyledLi
        ><SearchLink key={page.item.UID} to={`/${page.item.SearchRequirement}/${page.item.UID}`}><StyledSpan>{page.item.SearchRequirement === "courses"? `Degrees & Courses ->` : `Resources & Advising -> `}</StyledSpan> {page.item.Webpage_Title}</SearchLink></StyledLi>):null}
       </StyledOl>
       
      </SearchSection>

    </SearchPageWrapper>
  );
};

export default Search;
