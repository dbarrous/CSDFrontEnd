
import Markdown from "react-markdown";
import styled from "styled-components";

const StyledMarkdown = styled(Markdown)`
  img {
    width: auto;
    height: 80%;
    margin: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 1000px) {
      width: 90%;
    }
    @media screen and (max-width: 430px) {
      width: 100%;
    }
  }
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
    font-family: "Roboto", sans-serif;
    text-align: center;
    margin: 1rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--secondary);
    font-family: "Roboto", sans-serif;
    text-align: center;
    margin: 1rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary);
    font-family: "Roboto", sans-serif;
    text-align: center;
    margin: 1rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
  h4 {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--secondary);
    font-family: "Roboto", sans-serif;
    text-align: center;
    margin: 1rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
  h5 {
    font-size: 1.225rem;
    font-weight: bold;
    color: var(--primary);
    font-family: "Roboto", sans-serif;
    text-align: center;
    margin: 1rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
  h6 {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--accent);
    font-family: "Roboto", sans-serif;
    text-align: center;
    margin: 1rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
  p {
    font-size: 1.2rem;
    color: #111111;
    font-family: "Perpetua", serif;
    line-height: 1.5rem;
    text-align: center;
    margin: 1.5rem;
  }
  ul {
    width: 60%;
    margin: 1rem auto;
    list-style-type: circle;
    text-align: center;
  }
  ol {
    width: 60%;
    margin: 1rem auto;
    text-align: center;
  }
  li {
    margin: 0.75rem;
    color: var(--primary);
  }
  strong {
    font-weight: bolder;
  }

  table {
    width: 70%;
    margin: 1rem auto;
  }
  thead {
    color: var(--background);
    background: var(--primary);
  }
  tbody {
    border: 1px solid black;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    width: 600px;
  }
  tr {
    border: 1px solid black;
  }
  td {
    border: 1px solid black;
    padding: 1rem;
  }
  em {
    text-decoration: underline;
  }
`;

export default StyledMarkdown;
