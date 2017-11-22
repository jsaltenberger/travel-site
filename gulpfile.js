var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('html', function() {
    console.log('HTML task here...');
});

gulp.task('styles', function() {
    console.log('CSS task here...');
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});

