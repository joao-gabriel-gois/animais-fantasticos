const path = require('path');
// The export bellow make flag --output for webpack's script 'build' not necessary anymore
module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './js/script.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js',
  },
};
