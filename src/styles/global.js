import { createGlobalStyle } from 'styled-components';
import HeaderFont from '../fonts/moria-citadel.regular.ttf';
import BodyFont from '../fonts/caslon-antique.regular.ttf';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    background: ${({ theme }) => theme.background};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    transition: background 0.25s linear;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  @font-face {
    font-family: header;
    src: url(${HeaderFont});
  }
  
  @font-face {
    font-family: body;
    src: url(${BodyFont});
  }
  
  
  .app-container {
    font-size: calc(5px + 1vw);
    text-align: center;
  }
  
  .header-container {
    font-family: header;
    color: rgb(255,215,0);
    -webkit-text-stroke: 0.5px rgb(178,34,34);
  }
  
  .sheet-container {
    font-family: body;
    color: ${({ theme }) => theme.text};
    margin: auto;
    width: 80%;

    transition: background-color 0.25s linear, color 0.25s linear;
  }

  .sheet-column {
    display: flex;
    flex-direction: column;
  }
  
  .sheet-row {
    display: flex;
    justify-content: center;
  }
  
  .sheet-div {
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 5%;
    background-color: ${({ theme }) => theme.body};
    padding: 10px;
    margin: 10px;

    transition: background-color 0.25s linear, color 0.25s linear;
  }
  
  .bio-column {
    display: flex;
    flex-direction: column;
  }
  
  .bio-row {
    display: flex;
    justify-content: flex-start;
  }
  
  .skill-row {
    display: flex;
    justify-content: flex-end;
  }
  
  .name-div {
    flex-grow: 1;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 5%;
    background-color: ${({ theme }) => theme.body};
    padding: 10px;
    margin: 10px;

    transition: background-color 0.25s linear, color 0.25s linear;
  }
`;