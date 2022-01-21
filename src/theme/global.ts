import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }


  body {
    background-color: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-family: ${props => props.theme.tipography.h1};
    font-size: ${props => props.theme.sizes.h1};
  }

  h2, h3, h4 {
    font-family: ${props => props.theme.tipography.headings};
  }


`