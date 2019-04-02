'use strict';

const { version } = require('./package.json')
const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
	return src('./src/lib/theme-chalk/index.scss')
		.pipe(sass.sync())
		.pipe(autoprefixer({
			browsers: ['ie > 9', 'last 2 versions'],
			cascade: false
		}))
		.pipe(cssmin())
		.pipe(dest('./lib'))
		.pipe(rename('element-theme-' + version + '.min.css'))
		.pipe(dest('./lib/version'));
}

function copyfont() {
	return src('./src/lib/theme-chalk/fonts/**')
		.pipe(cssmin())
		.pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyfont);
