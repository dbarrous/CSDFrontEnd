import React from "react";
import styled from "styled-components";
import Title from "../../DynamicComponents/Title";
import StyledSideMenu from "../../StyledSideMenu";
import StyledMarkdown from "../../StyledMarkdown";
import useFetch from "../../useFetch";
import { useHistory } from "react-router-dom";
import Upload from "../../DynamicComponents/Upload";

const ResourcesPage = styled.section`
  width: 100%;
  min-height: 600px;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  grid-template-areas: "Sidebar ResourceLandingPage";

  @media screen and (max-width: 1050px) {
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
const LandingPage = styled.article`
  grid-area: ResourceLandingPage;
  background-color: var(--background);
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  max-width: 90%;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1050px) {
    min-height: 600px;
  }
  @media screen and (min-width: 1920px) {
    min-height: 1000px;
  }
`;

const Sidebar = styled.nav`
  grid-area: Sidebar;
  background-color: var(--primary);
  @media screen and (max-width: 1050px) {
    width: 100%;
    padding-bottom: 1rem;
  }
`;
const SidebarTitle = styled.h5`
  color: var(--background);
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem;
  font-family: "Roboto", Arial, sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;
const AttachmentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
`;
const AttachmentHeader = styled.h4`
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
  color: var(--secondary);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
`;

const Resources = () => {
  const res = useFetch("http://api.salemstate.edu/folder-for-advising-pages");
  const degree = useFetch("http://api.salemstate.edu/advising-pages");
  const object = [];
  const history = useHistory();

  if (res.isLoading === false && degree.isLoading === false) {
    res.response.map((page) => {
      object.push({
        label: page.Folder_name,
        value: page.Folder_name,
        children: page.advising_pages.map((item) => ({
          label: item.Webpage_Title,
          value: item.UID,
        })),
      });
    });
    degree.response.map((page) => {
      if (page.folder_for_advising_page === null && page.id !== 1) {
        object.push({
          label: page.Webpage_Title,
          value: page.UID,
        });
      }
    });
  }

  return (
    <ResourcesPage>
      <LandingPage>
        <Section>
          {degree.isLoading ? (
            <img
              style={{ width: "75%" }}
              src="/images/pulse.gif"
              alt="loading animation"
            />
          ) : (
            <Title>{degree.response[0].Webpage_Title}</Title>
          )}
          {degree.isLoading ? null : (
            <StyledMarkdown source={degree.response[0].Webpage_Text} />
          )}

          {degree.isLoading === false &&
          degree.response[0].Extras.length !== 0 ? (
            <AttachmentHeader>Attachments:</AttachmentHeader>
          ) : null}
          <AttachmentWrapper>
            {degree.isLoading
              ? null
              : degree.response[0].Extras.map((item) => (
                  <Upload
                    url={`http://api.salemstate.edu${item.Upload.url}`}
                    ext={item.Upload.ext}
                    key={item.id}
                  >
                    {item.Alternative_Text}
                  </Upload>
                ))}
          </AttachmentWrapper>
        </Section>
      </LandingPage>
      {degree.isLoading ? null : (
        <Sidebar>
          <SidebarTitle>Links</SidebarTitle>
          <StyledSideMenu
            items={object}
            onMenuItemClick={(value) => history.push(`/advising/${value}`)}
          />
        </Sidebar>
      )}
    </ResourcesPage>
  );
};
export default Resources;
