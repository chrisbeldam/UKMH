var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpSequence = require('gulp-sequence');

//Takes the sass style sheet and converts it into a css file in the correct folder.
gulp.task('styles', function() {
    gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});
//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});


//Compresses the JS Files into a folder called MinJS
gulp.task('compress', function(){
   gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./MinJS/'))
});

//Compresses the CSS Files into a folder called cssnano
gulp.task('cssnano', function(){
  return gulp.src(paths.sccsdest)
  .pipe(cssnano())
  .pipe(gulp.dest('./cssnano/'))
});

//Run all of the tasks in order
gulp.task('build', gulpSequence('styles', 'cssnano', 'compress'));
