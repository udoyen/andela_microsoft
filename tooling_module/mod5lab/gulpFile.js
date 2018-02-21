var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
// Create a default task by calling the task function on the gulp object with the
//first parameter and an empty array as the second parameter.
//Add the string 'uglify' to the empty array parameter. Your task function call
//should now look like the following code:
gulp.task('default', ['uglify', 'lint']);

// Create an uglify task by calling the task function on the gulp object.
// Pass a string 'uglify' as the first parameter.
gulp.task('uglify', function() {
  return watch('lintTest.js', {
      ignoreInitial: false
    })
    .pipe(gulp.src('lintTest.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist-gulp'))
    );
});

gulp.task('lint', function() {
  return watch('lintTest.js', {
      ignoreInitial: false
    })
    .pipe(gulp.src('lintTest.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
    );
});
