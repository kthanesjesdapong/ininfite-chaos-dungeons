import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
:root {
    --primary: #18ffff;
    --primary-light: #adffff;
    --primary-dark; #091034;
    --gray100: #f9fbff;
    --gray150: #f4f6fb;
    --gray200: #eef1f6;
    --gray300: #e1e5ee;
    --gray400: #767b91;
    --gray500: #4f546c;
    --gray600: #2a324b;
    --gray700: #161d34;
    --bg: #1e242f;
    --radius: 0.5rem;
}

body {
    height: 100vh;
    display: grid;
    justify-content: center;
    flex-wrap: row;
    align-items: center;
    background-color: var(--bg)
}

`;


export default GlobalStyles;