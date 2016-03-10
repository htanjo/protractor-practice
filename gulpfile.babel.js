'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import {spawn} from 'npm-run';

const bs = browserSync.create();

gulp.task('serve', (done) =>
  bs.init({
    notify: false,
    open: false,
    server: 'app',
    files: 'app/**'
  }, done)
);

gulp.task('update-webdriver', (done) =>
  spawn('webdriver-manager', ['update'], {stdio: 'inherit'})
    .on('close', done)
);

gulp.task('test', ['update-webdriver', 'serve'], (done) => {
  const url = bs.getOption('urls').get('local');
  spawn('protractor', ['protractor.conf.js', `--baseUrl=${url}`], {stdio: 'inherit'})
    .on('close', (code) => {
      bs.exit();
      done(code);
    })
});
