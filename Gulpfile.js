const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const babelify = require('babelify');
const concat = require('gulp-concat');
const source = require('vinyl-source-stream');
const eslint = require('gulp-eslint');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config');

gulp.task('watch', function() {
  gulp.watch('web/**/*.sass', ['css']);
  gulp.watch('web/**/*.js', ['js']);
});

gulp.task('css', function() {
  return sass('web/static/css/app.scss')
    .pipe(gulp.dest('priv/static/css'));
});

gulp.task('js', function() {
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

gulp.task('default', ['css', 'js']);

