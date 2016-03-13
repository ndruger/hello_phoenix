const webpack = require('webpack');

module.exports = {
  devtool: (process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development') ? 'eval-cheap-module-source-map' : undefined,
  debug: true,
  entry: {
    app: './web/static/js/app.js',
    vendor: [
      'react',
      'react-router',
      'reflux',
      'i18next-client',
      'react-bootstrap',
      'backbone',
      'chai',
      'react/addons',
      'material-ui',
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
      // {
      //   test: /\.js?$/, loaders: [
      //     'react-hot',
      //     'babel?' + JSON.stringify({
      //       query: {presets: ["react", "es2015", "stage-0"]},
      //     }),
      //   ], exclude: /node_modules/
      // },
      {test: /\.js$/, loader: "babel", query: {presets: ["react", "es2015", "stage-0"]}},
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css!sass' },
      { test: /\.png$/, loader: 'file-loader' },
      { test: /\.jpg$/, loader: 'file-loader' },
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      'vendor',
      'vendor.js'
    )
  ],
};

