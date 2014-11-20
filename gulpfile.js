var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
//var concat = require('gulp-concat');

gulp.task('clean', function (done) {
  del(['dist'], done);
});

gulp.task('default', function () {
  return gulp.src('src/*.js')
    .pipe(sourcemaps.init())
    .pipe(traceur())
    //.pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});
