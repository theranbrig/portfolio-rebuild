// next.config.js
const withImages = require('next-images');
const withBabelMinify = require('next-babel-minify');

module.exports = withImages(
  {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });

      return config;
    },
  },
  withBabelMinify()
);
