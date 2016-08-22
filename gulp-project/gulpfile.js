'use strict';
/*jslint node: true*/

/* Imports packages
============================================*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

// Sass compiler
gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css/'));
});

// Gulp watch sass
gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

// Concatenete and minify js and css files 
gulp.task('minify', function () {
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', ['sass', 'minify'], function () {
	console.log("Building files");
});
