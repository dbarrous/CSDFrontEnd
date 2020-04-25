import React from "react";
import styled from "styled-components";
import Title from "../../DynamicComponents/Title";
import useFetch from "../../useFetch";
import StyledSideMenu from "../../StyledSideMenu";
import StyledMarkdown from "../../StyledMarkdown";
import Upload from "../../DynamicComponents/Upload";
import { useHistory } from "react-router-dom";

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
const ResourcesLandingPage = styled.article`
  grid-area: ResourceLandingPage;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ResourcesSection = styled.section`
  display: flex;
  max-width: 90%;
  min-width: 80%;
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

const ResourcesTemplate = ({ match }) => {
  const res = useFetch("http://api.salemstate.edu/folder-for-advising-pages");
  const degree = useFetch("http://api.salemstate.edu/advising-Pages");
  const object = [];
  const history = useHistory();
  let title = "";
  let content = "";
  let uid = "";
  let extras = [];

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
      if (page.UID === match.params.id) {
        title = page.Webpage_Title;
        content = page.Webpage_Text;
        uid = page.UID;
        extras = page.Extras;
      }

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
      <ResourcesLandingPage>
        <ResourcesSection>
          {degree.isLoading ? (
            <img
              style={{ width: "75%" }}
              src="/images/pulse.gif"
              alt="loading animation"
            />
          ) : (
            <Title>{title}</Title>
          )}
          {degree.isLoading ? null : (
            <StyledMarkdown source={content} escapeHtml={false} />
          )}
          {degree.isLoading === false && extras.length !== 0 ? (
            <AttachmentHeader>Attachments:</AttachmentHeader>
          ) : null}
          <AttachmentWrapper>
            {degree.isLoading
              ? null
              : extras.map((item) => (
                  <Upload
                    url={`http://api.salemstate.edu${item.Upload.url}`}
                    ext={item.Upload.ext}
                    key={item.id}
                  >
                    {item.Alternative_Text}
                  </Upload>
                ))}
          </AttachmentWrapper>
        </ResourcesSection>
      </ResourcesLandingPage>
      {degree.isLoading ? null : (
        <Sidebar>
          <SidebarTitle>Links</SidebarTitle>
          <StyledSideMenu
            items={object}
            activeItem={uid}
            onMenuItemClick={(value) => history.push(`/advising/${value}`)}
          />
        </Sidebar>
      )}
    </ResourcesPage>
  );
};

export default ResourcesTemplate;
