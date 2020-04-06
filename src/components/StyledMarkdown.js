import Markdown from "react-markdown";
import styled from "styled-components";

const StyledMarkdown = styled(Markdown)`
  img {
    max-width: 100%;
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
    font-size: 1rem;
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
    list-style-type: decimal;
  }
  li {
    margin: 0.75rem;
    color: var(--primary);
  }
  strong {
    font-weight: bolder;
  }

  table {
    min-width: 60vw;
    max-width: 90vw;
    margin: 2rem auto;
  }
  thead {
    color: var(--background);
    background: var(--primary);
    border: 1px solid var(--primary);
  }
  th {
    padding: 1rem;
    text-align: center;
    vertical-align: middle;
  }
  tbody {
    border: 1px solid black;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }
  tr:nth-child(even) {
    border: 1px solid black;
    background: rgba(0, 0, 0, 0.1);
  }
  td {
    border: 1px solid black;
    width: 10rem;
    padding: 1rem;
    text-align: center;
    vertical-align: middle;
  }
  em {
    text-decoration: underline;
  }
`;

export default StyledMarkdown;
