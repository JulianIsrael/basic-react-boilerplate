const webpack = require('webpack');
const path = require('path');

const fs = require ('fs'); // file system (nodejs library)

const APP_DIRECTORY = path.resolve(__dirname, 'src/app');
const BUILD_DIRECTORY = path.resolve(__dirname, 'build');

module.exports = {
  entry :[ 'eventsource-polyfill', 'webpack-hot-middleware/client?reload=true',  path.resolve(APP_DIRECTORY,'app.js')],
  target: 'web',
  output: {path: BUILD_DIRECTORY, filename: 'bundle.js', publicPath: '/' },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module : {
    loaders: [
      {test: /\.js$/, include: APP_DIRECTORY, exclude: /node_modules/, loader: 'babel', query: {presets: ['react-hmre','es2015','react']}}
    ]
  },
  resolve:{
      modulesDirectories: ['src/app', 'node_modules'],
  }
};
