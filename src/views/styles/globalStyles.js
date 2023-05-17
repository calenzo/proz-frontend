import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }

  p {
    font-family: "Roboto";
    margin: 0;
  }
`;

export default globalStyle;
