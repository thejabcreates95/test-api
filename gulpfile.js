'use strict';
const gulp = require('gulp');
const nodemon = require('gulp-nodemon')

// ===============================
// GET CONFIG
// ===============================
const nconf = require('nconf')
nconf.argv()
	.env()
	.add('user', {
		file: __dirname + '/config/default.json',
		type: 'file'
	})


// ===============================
// FUNCTIONS
// ===============================
gulp.task('nodemon', function (cb) {
	let started = false;
	return nodemon({
		script: './bin/www',
		env: { 'NODE_ENV': 'default' },
		ignore: ['src','public']
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});


gulp.task('default', ['nodemon']);