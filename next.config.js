// next.config.js
const withImages = require('next-images');
const withBabelMinify = require('next-babel-minify');

module.exports = withImages(withBabelMinify());
