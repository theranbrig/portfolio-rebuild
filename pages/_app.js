import React from 'react';
import App, { Container } from 'next/app';
import DarkProvider from '../components/context/DarkContext';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <DarkProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </DarkProvider>
    );
  }
}
