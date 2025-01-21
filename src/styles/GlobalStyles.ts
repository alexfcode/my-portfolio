import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
*,
 *::before,
 *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.primeFont};
  min-width: 360px;
}

 a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

section, footer, header {
    background-color: ${theme.colors.primaryBg}
}

section {
  padding: 100px 0;

  @media ${theme.media.mobile} {
    padding: 50px 0;
  }
    border: 1px solid white;
}


`;
