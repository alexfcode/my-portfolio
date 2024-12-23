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
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.smallTextAndIconsFont}
}

 a {
    text-decoration: none;
    color: ${theme.colors.linkText}
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
`;
