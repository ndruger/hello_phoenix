const gulp = require('gulp');
const babelify = require('babelify');
const concat = require('gulp-concat');
const source = require('vinyl-source-stream');
const eslint = require('gulp-eslint');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config');

gulp.task('watch', function() {
  gulp.watch('web/**/*.scss', ['assets']);
  gulp.watch('web/**/*.css', ['assets']);
  gulp.watch('web/**/*.js', ['assets']);
});

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

