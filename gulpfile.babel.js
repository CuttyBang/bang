// gulpfile.js
const gulp  = require('gulp'),
      browserSync = require('browser-sync').create(),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      cssnano = require('gulp-cssnano'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      babel = require('gulp-babel'),
      rename = require('gulp-rename'),
      htmlmin = require('gulp-htmlmin'),
      imagemin = require('gulp-imagemin'),
      gulpsync = require('gulp-sync')(gulp),
      plumber = require('gulp-plumber'),
      util = require('gulp-util');


const PATH = {
    output: 'dist/',
    src: 'src/'
};

const prefixer_settings = [
  'last 3 versions',
  'ie >= 8',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

//gulp-plumber error handling function
var onError = function (err) {
  console.log(err);
  this.emit('end');
};

//js minification
gulp.task('scripts', function() {
  return gulp.src(PATH.src + '*.js')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(rename('app.js'))
    .pipe(gulp.dest(PATH.output));
});

//task for SASS/SCSS transpilation
gulp.task('sass', function(){
  return gulp.src(PATH.src + '*.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass())
    .pipe(gulp.dest(PATH.output))
});

//CSS minification task
gulp.task('styles', function() {
  return gulp.src(PATH.output + 'main.css')
    .pipe(autoprefixer(prefixer_settings))
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(PATH.output));
});

//BrowserSync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            proxy: 'localhost.dev/bang'
        },
    });
});

gulp.task('watch', function() {
    // reload browsersync when `dist` changes
    gulp.watch(PATH.src + '*.js', ['scripts']);
    gulp.watch(PATH.src + '*.scss', gulpsync.sync(['sass','styles']));
    gulp.watch(PATH.output + '*').on('change', browserSync.reload);
    gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('default', ['browserSync', 'watch']);
gulp.task('build', gulpsync.sync(['scripts','sass','styles']));
