import React from "react";
import styled from "styled-components";
import Title from "../../DynamicComponents/Title";
import useFetch from "../../useFetch";
import PersonComponent from "../../DynamicComponents/PersonComponent";
import { NavLink } from "react-router-dom";

const PeoplePage = styled.section`
  width: 100%;
  min-height: 600px;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  grid-template-areas: "Sidebar People";
  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-height: 900px) {
    min-height: 1000px;
  }
  @media screen and (min-width: 2000px) {
    grid-template-columns: 15% 85%;
  }
`;
const PeopleLandingPage = styled.article`
  grid-area: People;
  display: flex;
  justify-content: center;
`;

const PeopleSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
`;

const PersonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Sidebar = styled.nav`
  grid-area: Sidebar;
  background-color: var(--primary);
  @media screen and (max-width: 500px) {
    padding-bottom: 1rem;
  }
`;
const SidebarHeader = styled.h4`
  color: var(--background);
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem;
  font-family: "Roboto", Arial, sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const Check = styled.div`
  grid-area: Check;
  border-radius: 3px;
  width: 12px;
  height: 12px;
  transition: none;
  background: ${(props) =>
    props.status
      ? 'url("/images/checkmark.png") center'
      : "var(--background) center"};
  background-size: cover;
`;

const Label = styled.div`
  grid-area: Label;
  font-family: Roboto, sans-serif;
  font-size: 0.85rem;
  h4 {
    margin-left: 1rem;
  }
`;

const AllCheckboxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CheckboxWrapper = styled.div`
  width: 100%;
  height: 0.8rem;
  transition: 0.25s;
  color: white;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 5% 95%;
  grid-template-areas: "Check Label";
  cursor: pointer;
  padding: 1rem;
  background: var(--secondary);
  :hover {
    background: var(--primary);
  }
  @media screen and (max-width: 450px) {
    height: 1.25rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 0.8rem;
  font-family: Roboto, sans-serif;
  font-size: 0.85rem;
  text-decoration: none;
  color: var(--background);
  transition: 0.25s;
  padding: 1rem;
  :hover {
    background: var(--primary);
    text-decoration: underline;
    text-decoration-color: var(--secondary);
  }
`;

const People = () => {
  const res = useFetch("http://api.salemstate.edu/people");

  const [filter, setFilter] = React.useState({
    Full_Time: true,
    Adjunct: true,
    Staff: true,
    Retired_Departed: false,
  });
  let FilteredContents = [];
  const handleFilter = (value) => {
    if (value === "Full_Time") {
      setFilter({
        Full_Time: !filter.Full_Time,
        Adjunct: filter.Adjunct,
        Staff: filter.Staff,
        Retired_Departed: filter.Retired_Departed,
      });
    } else if (value === "Adjunct") {
      setFilter({
        Full_Time: filter.Full_Time,
        Adjunct: !filter.Adjunct,
        Staff: filter.Staff,
        Retired_Departed: filter.Retired_Departed,
      });
    } else if (value === "Staff") {
      setFilter({
        Full_Time: filter.Full_Time,
        Adjunct: filter.Adjunct,
        Staff: !filter.Staff,
        Retired_Departed: filter.Retired_Departed,
      });
    } else if (value === "Retired_Departed") {
      setFilter({
        Full_Time: filter.Full_Time,
        Adjunct: filter.Adjunct,
        Staff: filter.Staff,
        Retired_Departed: !filter.Retired_Departed,
      });
    }
  };

  if (res.isLoading === false) {
    FilteredContents = res.response.map((item) => {
      if (item.Status === "Full_Time" && filter.Full_Time) {
        return <PersonComponent key={item.id} {...item} />;
      } else if (item.Status === "Adjunct" && filter.Adjunct) {
        return <PersonComponent key={item.id} {...item} />;
      } else if (item.Status === "Staff" && filter.Staff) {
        return <PersonComponent key={item.id} {...item} />;
      } else if (
        item.Status === "Retired_Departed" &&
        filter.Retired_Departed
      ) {
        return <PersonComponent key={item.id} {...item} />;
      }
    });
  }
  return (
    <PeoplePage>
      <PeopleLandingPage>
        <PeopleSection>
          <Title>Faculty &amp; Staff</Title>
          <PersonWrapper>
            {res.isLoading === false ? FilteredContents : null}
          </PersonWrapper>
        </PeopleSection>
      </PeopleLandingPage>
      <Sidebar>
        <SidebarHeader>Check to Show</SidebarHeader>
        <AllCheckboxWrapper>
          <CheckboxWrapper onClick={() => handleFilter("Full_Time")}>
            <Check status={filter.Full_Time} />
            <Label>
              <h4>Full Time</h4>
            </Label>
          </CheckboxWrapper>
          <CheckboxWrapper onClick={() => handleFilter("Adjunct")}>
            <Check status={filter.Adjunct} />
            <Label>
              <h4>Adjunct</h4>
            </Label>
          </CheckboxWrapper>
          <CheckboxWrapper onClick={() => handleFilter("Staff")}>
            <Check status={filter.Staff} />
            <Label>
              <h4>Staff</h4>
            </Label>
          </CheckboxWrapper>

          <StyledNavLink to={"/people/retired-departed"}>
            Go to Retired / Departed
          </StyledNavLink>

          {/* <CheckboxWrapper onClick={()=>handleFilter("Retired_Departed")}>
            <Check status={filter.Retired_Departed}/>
            <Label><h4>Retired / Departed</h4></Label>
          </CheckboxWrapper> */}
          {/* <CheckboxWrapper><span className="checkmark"/><input type="checkbox" value="Full_Time" className="checkbox" onChange={(event)=>handleFilter(event.target.value)} name="Full_Time" defaultChecked/>
        <label for="Full_Time">Full Time</label></CheckboxWrapper>
        <CheckboxWrapper><span className="checkmark"/><input type="checkbox" value="Adjunct" className="checkbox" onChange={(event)=>handleFilter(event.target.value)} name="Adjunct" defaultChecked/>
        <label for="Adjunct">Adjunct</label></CheckboxWrapper>
        <CheckboxWrapper><span className="checkmark"/><input type="checkbox" value="Staff"  className="checkbox" onChange={(event)=>handleFilter(event.target.value)} name="Staff" defaultChecked/>
        <label for="Staff">Staff</label></CheckboxWrapper>
       <CheckboxWrapper><span className="checkmark"/><input type="checkbox" value="Retired_Departed" className="checkbox" onChange={(event)=>handleFilter(event.target.value)} name="Retired_Departed" />
        <label for="Retired_Departed">Retired/Departed</label></CheckboxWrapper> */}
        </AllCheckboxWrapper>
      </Sidebar>
    </PeoplePage>
  );
};

export default People;
