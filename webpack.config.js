const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  plugins: [new htmlPlugin({title: 'Async-Await example'})]
};