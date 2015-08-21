const _ = require('lodash');
const path = require('path');
const gulp = require('gulp');
const babelify = require('babelify');
const concat = require('gulp-concat');
const source = require('vinyl-source-stream');
const eslint = require('gulp-eslint');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config');

// Use webpack --watch
// gulp.task('watch', function() {
//   gulp.watch(['web/**/*.js', 'web/**/*.scss', 'web/**/*.css']).on('change', function(event) {
//     if (event.type !== 'changed') {
//       return;
//     }
//     return gulp.src('')
//       .pipe(webpack(_.assign({}, webpackConfig, {watch: true})))
//       .pipe(gulp.dest(webpackConfig.output.path));
//   });
// });

gulp.task('assets', function() {
  return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('lint', function () {
  return gulp.src(['web/static/js/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('default', ['assets']);

