import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 16px;

    --width: 1200px;
    --max-width: 1200px;
    --min-width: 320px;
    --nav-height: 54px;
    --footer-height: 60px;

    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;

    --color-black: #0a0a0a;
    --color-white: #ffffff;
}

* {
  margin: 0;
  padding: 0;
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
`

export default GlobalStyle
