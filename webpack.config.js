const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: (process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development') ? 'eval-cheap-module-source-map' : undefined,
  debug: true,
  entry: {
    app: [
      './web/static/js/app.js',
      './web/static/css/app.scss',
    ],
    vendor: [
      'backbone',
      'i18next-client',
      'lodash',
      'react',
      'react-redux',
      'react-router',
      'react-bootstrap',
      'react/addons',
      'redux',
    ],
  },
  output: {
    path: __dirname + '/priv/static/assets',
    filename: 'app.js',
    publicPath: '/assets/',
  },
  externals: {
    jquery: 'jQuery',
  },
  resolve: {
    root: __dirname + '/web/static/js',
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css!sass')},
      {test: /\.png$/, loader: 'file-loader'},
      {test: /\.jpg$/, loader: 'file-loader'},
    ],
    postLoaders: (function() {
      if (process.env.NODE_ENV !== 'test') {
        return [];
      }
      return [{
        test: /\.js$/,
        exclude: /(node_modules\/|\.spec|\.webpack\.js)/,
        loader: 'istanbul-instrumenter',
      }];
    })(),
  },
  plugins: (function() {
    const plugins = [];
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.optimize.CommonsChunkPlugin(
      'vendor',
      'vendor.js'
    ));
    plugins.push(new ExtractTextPlugin('app.css'));
    if (process.env.NODE_ENV === 'production') {
      plugins.push(new webpack.optimize.UglifyJsPlugin());
    }
    return plugins;
  })(),
};

