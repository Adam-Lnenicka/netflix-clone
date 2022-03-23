import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    box-sizing: border-box;
  }
  
  h1,
  h2 {
    font-weight: 300;
    font-size: 4rem;
  }
  
  p {
    font-size: 14px;
  }
  
  body {
    background-color: #232323;;
    color: white;
    margin: 0px;
    font-family: "Montserrat", sans-serif;
  }
  
  .hide {
    display: none;
  }
  
  .flex {
    display: flex;
    align-items: center;
  }
`;
