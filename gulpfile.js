var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
//var concat = require('gulp-concat');

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(rimraf());
});

gulp.task('default', function () {
  return gulp.src('src/*.js')
    .pipe(sourcemaps.init())
    .pipe(traceur())
    //.pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});
