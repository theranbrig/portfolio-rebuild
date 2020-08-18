// next.config.js
const withImages = require('next-images');
const withBabelMinify = require('next-babel-minify');

const withPWA = require('next-pwa');

module.exports = withPWA(
  {
    pwa: {
      dest: 'public',
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });

      return config;
    },
  },
  withImages(withBabelMinify())
);
