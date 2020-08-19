import Document, { Head, Main, NextScript } from 'next/document';

import { DefaultSeo } from 'next-seo';
import { GA_TRACKING_ID } from '../lib/gtag';
import Router from 'next/router';
import SEO from '../seo.config';
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
          <meta name='theme-color' content='#272727' />
          <DefaultSeo {...SEO} />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <link rel='manifest' href='manifest.json' />
          <link rel='icon' type='image/x-icon' href='favicon.ico' />
          <link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png' />
          {this.props.styleTags}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
            }}
          />
        </Head>
        <body style={{ margin: '0', width: '100%' }}>
          <form name='contact' netlify='true' netlify-honeypot='bot-field' hidden>
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
                link.href = '//fonts.googleapis.com/css2?family=Fira+Code:wght@100;300&family=Major+Mono+Display&family=Raleway:wght@100;300;400&family=Roboto:wght@100;300;400;500&display=swap';
                document.querySelector("head").appendChild(link);
              })();
                  `,
          }}></script>
      </html>
    );
  }
}

export default MyDocument;
