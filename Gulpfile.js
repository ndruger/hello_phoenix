const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config');

gulp.task('assets', function() {
  return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('lint', function() {
  return gulp.src(['web/static/js/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('default', ['assets']);

