/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg:#0d1117;
    --grey-1: #BCB4B4;
    --deep-dark: #161B22;
    --deep-blue: linear-gradient(
        90deg,
        rgb(77, 44, 210),
        rgb(58, 29, 176)
      );;
    --grey-2: #E4ECF5;
    --white : #EEF6FE;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--grey-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index: 101;
      background: var(--deep-blue);
      .scrollbar-thumb-y {
        background: var(--grey-1);
      }
    }
  }
`;
export default GlobalStyles;
