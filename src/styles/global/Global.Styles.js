import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
$red: #f65261;
$black: black;
$light-black: #232323;
$dark-grey: #424242;
$medium-grey: #555555;
$green: rgb(84, 133, 84);
$light-white: white;

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
    background-color: $light-black;
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
