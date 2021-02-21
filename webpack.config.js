const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/main/js/app.js'),
  output: {
    path: path.resolve(__dirname, './src/main/resources/static/js/'),
    filename: 'app.js',
  },
  mode: 'development',
};
