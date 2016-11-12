const webpack = require('webpack');
const path = require('path');

const fs = require ('fs'); // file system (nodejs library)
// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

const APP_DIRECTORY = path.resolve(__dirname, 'src/app');
const BUILD_DIRECTORY = path.resolve(__dirname, 'build');
const options = {
  "style": false,
  "libraryDirectory": "lib",  // default: lib
  "libraryName": "antd",
  "camel2DashComponentName": false, // default: true
  cssLoaders : 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
};
module.exports = {
  entry :[ 'eventsource-polyfill', 'webpack-hot-middleware/client?reload=true',  path.resolve(APP_DIRECTORY,'app.js')],
  target: 'web',
  output: {path: BUILD_DIRECTORY, filename: 'bundle.js', publicPath: '/' },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //new ExtractTextPlugin("[name].css")
  ],
  module : {
    loaders: [
      {test: /\.js$/, include: APP_DIRECTORY, exclude: /node_modules/, loader: 'babel', query: {plugins: [["import", options]], presets: ['react-hmre','es2015','react']}},
      {
      // Transform our own .css files with PostCSS and CSS-modules
      test: /\.css$/,
      exclude: /node_modules/,
      loader: options.cssLoaders,
    },
     {

      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
    }
      // {test: /\.js$/, include: APP_DIRECTORY, exclude: /node_modules/, loader: 'babel', query: {plugins: [["import", options]], presets: ['react-hmre','es2015','react']}}
      // {test: /\.css$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      // {test: /\.less$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")}
    ]
  },
  postcss: () => [
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
    postcssReporter({ // Posts messages from plugins to the terminal
      clearMessages: true,
    }),
  ],
  resolve:{
      modulesDirectories: ['src/app', 'node_modules'],
  }
};
