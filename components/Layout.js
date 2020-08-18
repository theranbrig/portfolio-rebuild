import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Nav from './Nav';
import PropTypes from 'prop-types';
import React from 'react';

const darkTheme = {
  darkBlack: '#131313',
  black: '#181818',
  white: 'gainsboro',
  blue: '#40a4c8',
  transparent: '#13131394',
  raleFont: 'Raleway',
  robFont: 'Roboto',
  spaceFont: "'Major Mono Display', monospace",
  firaFont: "'Fira Code', monospace",
  openFont: '"Open Sans", sans-serif',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    min-height: 100vh;
  }
`;

// later in your app
const Layout = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
        <GlobalStyle />
        <Nav>{props.children}</Nav>
      </React.Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
