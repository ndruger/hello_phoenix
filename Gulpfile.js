var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var babelify = require('babelify');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('watch', function() {
  gulp.watch('sass/**/*.sass', ['css']);
  gulp.watch('cs/**/*.coffee', ['coffee']);
  gulp.watch('web/**/*.js', ['js']);
});

gulp.task('css', function() {
  gulp
    .src('sass/app.sass')
    .pipe(sass())
    .pipe(gulp.dest('../priv/static/css'));
});

gulp.task('js', function() {
  browserify({
    entries: 'web/static/js/app.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./priv/static/js'))

  // return gulp.src('cs/**/*.coffee').pipe(coffee()).pipe(concat('app.js')).pipe(gulp.dest('../priv/static/js'));
});

gulp.task('default', ['css', 'coffee']);

