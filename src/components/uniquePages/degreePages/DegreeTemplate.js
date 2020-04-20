import React from "react";
import styled from "styled-components";
import Title from "../../DynamicComponents/Title";
import useFetch from "../../useFetch";
import StyledSideMenu from "../../StyledSideMenu";
import StyledMarkdown from "../../StyledMarkdown";
import { useHistory } from "react-router-dom";
import Upload from "../../DynamicComponents/Upload";

const DegreesPage = styled.section`
  width: 100%;
  min-height: 600px;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  grid-template-areas: "Sidebar DegreesLandingPage";

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
const DegreesLandingPage = styled.article`
  grid-area: DegreesLandingPage;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const DegreesSection = styled.section`
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
const DegreesTemplate = ({ match }) => {
  const res = useFetch("http://173.244.1.41:1337/folder-for-degree-pages");
  const degree = useFetch("http://173.244.1.41:1337/degree-pages");
  const object = [];
  const history = useHistory();
  let title = "";
  let content = "";
  let uid = "";
  let extras = [];
  if (res.isLoading === false && degree.isLoading === false) {
    res.response.map((page) => {
      object.push({
        label: page.folder_name,
        value: page.folder_name,
        children: page.degree_pages.map((item) => ({
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

      if (page.folder_for_degree_page === null && page.id !== 1) {
        object.push({
          label: page.Webpage_Title,
          value: page.UID,
        });
      }
    });
  }

  return (
    <DegreesPage>
      <DegreesLandingPage>
        <DegreesSection>
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
                    url={`http://173.244.1.41:1337${item.Upload.url}`}
                    ext={item.Upload.ext}
                    key={item.id}
                  >
                    {item.Alternative_Text}
                  </Upload>
                ))}
          </AttachmentWrapper>
        </DegreesSection>
      </DegreesLandingPage>
      {degree.isLoading ? null : (
        <Sidebar>
          <SidebarTitle>Links</SidebarTitle>
          <StyledSideMenu
            items={object}
            activeItem={uid}
            onMenuItemClick={(value) => history.push(`/courses/${value}`)}
          />
        </Sidebar>
      )}
    </DegreesPage>
  );
};

export default DegreesTemplate;
