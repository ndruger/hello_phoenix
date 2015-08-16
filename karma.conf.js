process.env.NODE_ENV = 'test';

var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';


module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    files: [
      'tests.webpack.js',
    ],
    frameworks: [ 'chai', 'mocha' ],
    // plugins: [
    //   'karma-chrome-launcher',
    //   'karma-chai',
    //   'karma-mocha',
    //   'karma-sourcemap-loader',
    //   'karma-webpack',
    // ],
    reporters: [ 'dots', 'coverage' ],
    preprocessors: {
      // 'tests.webpack.js': [ 'webpack', 'coverage', 'sourcemap' ]
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      type : 'html',
      dir : 'browser_cover/'
    }
  });
};
