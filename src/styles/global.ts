import {createGlobalStyle} from 'styled-components';

import githubBackground from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 62.5%;
  } 

  body {
    color: #fff; 
    background: #56595B url(${githubBackground}) no-repeat 70% top;
    background-size: 500px;
    
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, select {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
`;