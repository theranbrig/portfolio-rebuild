import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
import Router from 'next/router';
import withGA from 'next-ga';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="Theran Briogwatz - Web Developer Portfolio Site" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" prefetch />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" prefetch />
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
            prefetch
          />
          <link href="https://fonts.googleapis.com/css?family=Lato|Raleway:300|Roboto" rel="stylesheet" prefetch />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
            prefetch
          />
          {this.props.styleTags}
          <title>Theran Brigowatz | Web Developer</title>
        </Head>
        <body style={{ margin: '0', width: '100%' }}>
          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="title" />
            <input type="email" name="email" />
            <textarea name="message" />
          </form>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default withGA('UA-127054970-1', Router)(MyDocument);
