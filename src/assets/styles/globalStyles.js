import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    font-family: ${(props) => props.theme.fonts.text}; 
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5em;
    color: ${(props) => props.theme.colors.dark_grey};

    scroll-behavior: smooth;
    overflow-x: hidden;    
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
`;

export default GlobalStyle;
