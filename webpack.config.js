const path = require('path');
const loaders = require('./webpack/loaders');

module.exports = {
  entry: path.join(__dirname, 'client/index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: devmode ? '[name].[hash].js' : '[name].[chunkhash].js',
  },

  devtool: 'source-map',

  module: {
    loaders: [
      loaders.js,
    ],
  },

};
