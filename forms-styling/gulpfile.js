'use strict';

/*
 * Packages import
========================================*/
var gulp = require('gulp');
var sass = require('gulp-sass');

/* Sass task */
gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
});

/* watch sass files */
gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.sass', ['sass']);
});

/* default task */
gulp.task('default', ['sass'], function () {
		console.log('BUIDING DONE,,,!');
});
