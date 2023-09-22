import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 16px;

    --width: 1200px;
    --max-width: 1400px;
    --min-width: 320px;
    --text-width: 700px;
    --nav-height: 54px;
    --footer-height: 60px;

    --font-xs: 16px;
    --font-sm: 18px;
    --font-md: 22px;
    --font-lg: 40px;
    --font-xl: 64px;

    --icon-xl: 100px;

    --page-padding: 136px;

    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;

    --color-black: #2A364E;
    --color-white: #ffffff;
    --color-gray: #717989;
    --color-semiGray: #f5f5f7;
    --color-lightGray: #f2f2f2;
    --color-blue: #086bce;

    --gap: 32px;
}

@media screen and (max-width: 1400px) {
  :root{
    --width: 92%;
    --text-width: 92%;

    --font-xs: 14px;
    --font-sm: 16px;
    --font-md: 18px;
    --font-lg: 32px;
    --font-xl: 52px;
  }
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

html, body, #___gatsby, #gatsby-focus-wrapper {
    min-height: 100%;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    background-color: var(--color-white);
    -webkit-font-smoothing: antialiased;
    * {
      color: var(--color-black);
    }
  }
`;

export default GlobalStyle;
