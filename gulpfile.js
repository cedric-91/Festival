var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    pump = require("pump"),
    jshint = require('gulp-jshint'),
    header  = require('gulp-header'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    package = require('./package.json');


var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');

//gulp.task('sass', function () {
    //return gulp.src('src/sass/**/*.sass')
    //.pipe(sass({errLogToConsole: true}, {outputStyle:'compressed'}))
    //.pipe(autoprefixer('last 4 version'))
    //.pipe(gulp.dest('app/assets/css'))
    //.pipe(cssnano())
    //.pipe(rename({ suffix: '.min' }))
    //.pipe(header(banner, { package : package }))
    //.pipe(gulp.dest('app/assets/css'))
    //.pipe(browserSync.reload({stream:true}));
//});

gulp.task("sass", function() {
  return gulp.src("src/sass/**/*.sass")
  .pipe(sass({outputStyle:'compressed'}).on("error", sass.logError))
  .pipe(gulp.dest("app/assets/css/"))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('js',function(){
  gulp.src('assets/js/main.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('assets/js'))
    .pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/min/'))
    .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
      server: {
        baseDir: "app"
      }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['sass', 'js', 'browser-sync'], function () {
    gulp.watch("assets/sass/**/*.sass", ['sass']);
    gulp.watch("assets/js/main.js", ['js']);
    gulp.watch("app/*.html", ['bs-reload']);
});
