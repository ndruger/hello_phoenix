const webpack = require('webpack');

module.exports = {
  devtool: (process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development') ? 'eval-cheap-module-source-map' : undefined,
  debug: true,
  entry: [
    './web/static/js/app.js',
  ],
  output: {
    path: __dirname + '/priv/static/js',
    filename: 'app.js',
  },
  resolve: {
    root: __dirname + '/web/static/js',
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
    ],
  },
};

