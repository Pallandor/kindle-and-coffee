const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins'); 

module.exports = {
  entry: path.join(__dirname, 'client/index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },

  devtool: 'source-map',

  plugins,

  module: {
    loaders: [
      loaders.js,
    ],
  },

};
