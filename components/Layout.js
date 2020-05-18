import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Nav from './Nav';
import PropTypes from 'prop-types';

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
};
const lightTheme = {
  darkBlack: 'gainsboro',
  black: 'white',
  white: '#232323',
  blue: '#40a4c8',
  transparent: '#f3f3f394',
  raleFont: 'Raleway',
  robFont: 'Roboto',
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
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <React.Fragment>
        <GlobalStyle />
        <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
          {props.children}
        </Nav>
      </React.Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
