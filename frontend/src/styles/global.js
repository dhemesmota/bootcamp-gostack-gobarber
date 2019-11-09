import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0 !important;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body, #root {
    height: auto;
    min-height: 100vh;
  }

  html {
    font-size: 65%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1.3rem 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast {
    border-radius: 0.4rem !important;
  }
`;
