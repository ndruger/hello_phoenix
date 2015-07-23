const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const babelify = require('babelify');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('watch', function() {
  gulp.watch('web/**/*.sass', ['css']);
  gulp.watch('web/**/*.js', ['js']);
});

gulp.task('css', function() {
  return sass('web/static/css/app.scss')
    .pipe(gulp.dest('priv/static/css'));
});

gulp.task('js', function() {
  return browserify({
    entries: 'web/static/js/app.js',
    debug: true
  })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('priv/static/js'))

});

gulp.task('default', ['css', 'js']);

