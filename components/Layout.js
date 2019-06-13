import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';

const darkTheme = {
  darkBlack: '#131313',
  black: '#232323',
  white: 'gainsboro',
  blue: '#40a4c8',
  raleFont: 'Raleway',
  robFont: 'Roboto',
};
const lightTheme = {
  darkBlack: 'gainsboro',
  black: 'white',
  white: '#232323',
  blue: '#40a4c8',
  raleFont: 'Raleway',
  robFont: 'Roboto',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
  }
`;

// later in your app
const Layout = props => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <React.Fragment>
        <GlobalStyle />
        <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
          {props.children}
        </Nav>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
