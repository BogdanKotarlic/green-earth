const { dest, watch, series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');

function compilescss() {
    return gulp.src('./styles/style.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(dest('./styles/css'))
}

function jsmin() {
    return gulp.src('./scripts/*.js')
        .pipe(terser())
        .pipe(dest('./scripts/jsmin'))
}

function watchTask() {
    watch('./styles/style.scss', compilescss);
    watch('./scripts/*.js', jsmin);
}

exports.default = series (
    compilescss,
    jsmin,
    watchTask
);