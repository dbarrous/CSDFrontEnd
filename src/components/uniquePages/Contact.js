import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../DynamicComponents/Title";
import Paragraph from "../DynamicComponents/Paragraph";
import SecTitle from "../DynamicComponents/SecTitle";
import styled from "styled-components";
const ContactPageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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
  color: var(--secondary);
  margin: 1rem;
  transition: 0.5s;
  text-decoration: none;
  :hover {
    color: var(--primary);
  }
`;
const Contact = () => {
  return (
    <ContactPageWrapper>
      <ContactSection>
        <Title>Contact Us</Title>
        <SecTitle>By Email:</SecTitle>
        <Paragraph>
          You can send an email to the chairperson of the department,
          <br /> Bo Hatfield at: bhatfield@salemstate.edu
        </Paragraph>
        <SecTitle>Mailing Address:</SecTitle>
        <Paragraph>
          Computer Science Department
          <br />
          MH 207
          <br />
          352 Lafayette Street
          <br />
          Salem, MA 01970-5353
        </Paragraph>
        <SecTitle>By Phone:</SecTitle>
        <Paragraph>
          (978) 542-6256 (Office Administrator: Donna Folino)
          <br />
          (978) 542-6979 (Department Chairperson: Bo Hatfield)
          <br /> (978) 542-7048 (Department Fax)
        </Paragraph>
        <ItemLink to="/">Go Back</ItemLink>
      </ContactSection>
    </ContactPageWrapper>
  );
};

export default Contact;
