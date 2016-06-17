/*jslint node: true*/

var gulp = require('gulp');
var sass = require('gulp-sass');


// Sass compiler
gulp.task('sass', function () {
	"use strict";

	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css/'));
});

// Gulp watch sass
gulp.task('watch', function () {
    "use strict";

    gulp.watch('app/scss/**/*.scss', ['sass']);
});

