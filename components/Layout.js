import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const theme = {
  darkBlack: '#131313',
  black: '#232323',
  white: 'gainsboro',
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
const Layout = props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Nav children={props.children} />
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
