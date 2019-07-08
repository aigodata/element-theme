'use strict';

const { version } = require('./package.json')
const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

// 主题名字
let theme = ['theme-chalk', 'theme-mixiaoku']

function compile(theme) {
	return src('./src/lib/' + theme + '/index.scss')
		.pipe(sass.sync())
		.pipe(autoprefixer({
			browsers: ['ie > 9', 'last 2 versions'],
			cascade: false
		}))
		.pipe(cssmin())
		.pipe(dest('./lib/' + theme + '/'))
		.pipe(rename('element-theme.min.css'))
		.pipe(dest('./lib/' + theme + '/' + version + '/'));
}

function copyfont(theme) {
	return src('./src/lib/' + theme + '/fonts/**')
		.pipe(cssmin())
		.pipe(dest('./lib/' + theme + '/' + version + '/fonts/'))
}

function copyLib() {
	return src('./lib/**')
		.pipe(dest('./docs/lib/'))
}

exports.build = series(
	() => {
		return compile(theme[0])
	},
	() => {
		return copyfont(theme[0])
	},
	() => {
		return compile(theme[1])
	},
	() => {
		return copyfont(theme[1])
	}
);

exports.copyLib = series(copyLib);
