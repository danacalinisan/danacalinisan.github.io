var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('minify-css', function() {
	return gulp.src(['css/animate.css', 'css/responsive.css', 'css/style.css'])
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
    }))
})

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

gulp.task('default', ['minify-css'])

// Dev task with browserSync
gulp.task('dev', ['minify-css', 'browserSync'], function() {
    // Reloads the browser whenever HTML or JS files changes
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/*.js', browserSync.reload);
    gulp.watch('css/*.css', ['minify-css', browserSync.reload]);
});