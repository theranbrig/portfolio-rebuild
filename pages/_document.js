import Document, { Head, Main, NextScript } from 'next/document';

import Router from 'next/router';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <!-- Open Graph / Facebook -->
          <meta property="og:type" content="website">
          <meta property="og:url" content="https:/theran.dev">
          <meta property="og:title" content="Theran Brigowatz - Web Developer">
          <meta property="og:description" content="Theran Brigowatz - Web Developer Portfolio">
          <meta property="og:image" content="https://res.cloudinary.com/dq7uyauun/image/upload/q_auto/v1551968239/IMG_1880.jpg">

          <!-- Twitter -->
          <meta property="twitter:card" content="summary_large_image">
          <meta property="twitter:url" content="https://theran.dev">
          <meta property="twitter:title" content="Theran Brigowatz - Web Developer">
          <meta property="twitter:description" content="Theran Brigowatz - Web Developer Portfolio">
          <meta property="twitter:image" content="https://res.cloudinary.com/dq7uyauun/image/upload/q_auto/v1551968239/IMG_1880.jpg"></meta>
          <meta name='description' content='Theran Brigowatz - Web Developer Portfolio Site' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='icon' type='image/x-icon' href='../static/favicon.ico' prefetch />
          {this.props.styleTags}
        </Head>
        <body style={{ margin: '0', width: '100%' }}>
          <form name='contact' netlify netlify-honeypot='bot-field' hidden>
            <input type='text' name='title' />
            <input type='email' name='email' />
            <textarea name='message' />
          </form>
          <Main />
          <NextScript />
        </body>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const link = document.createElement('link');
                link.rel = "stylesheet";
                link.href = '//fonts.googleapis.com/css2?family=Fira+Code:wght@100;300&family=Major+Mono+Display&family=Raleway:wght@100;300&display=swap';
                document.querySelector("head").appendChild(link);
              })();
              (function() {
                const link = document.createElement('link');
                link.rel = "stylesheet";
                link.href = '//use.fontawesome.com/releases/v5.7.2/css/all.css';
                link.integrity = 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
                link.crossOrigin = 'anonymous'
                document.querySelector("head").appendChild(link);
              })();
              (function() {
                const link = document.createElement('link');
                link.rel = "stylesheet";
                link.href = '//cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css';
                document.querySelector("head").appendChild(link);
              })();
                  `,
          }}></script>
      </html>
    );
  }
}

export default MyDocument;
