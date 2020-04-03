import { css } from "styled-components";

export const cssCustomVariables = css`
  :root {
    --primary: #001f5b;
    --secondary: #d24700;
    --accent: #008bd2;
    --tertiary: #5f8fb4;
    --background: #eee;
    --mobile: 375px;
    --mobileL: 400px;
    --tablet: 768px;
    --laptop: 1024px;
    --laptopL: 1440px;
    --desktop: 2560px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

export default cssCustomVariables;
