const gulp = require('gulp'),
  os = require('os'),
  gutil = require('gulp-util'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  gulpOpen = require('gulp-open'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  md5 = require('gulp-md5-plus'),
  clean = require('gulp-rimraf'),
  base64 = require('gulp-css-base64'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config.js'),
  usemin = require('gulp-usemin'),
  $ = require("gulp-load-plugins")(),
  htmlmin = require('gulp-htmlmin'),
  connect = require('gulp-connect'),
  gulpSequence = require('gulp-sequence');

const origin = 'src';
const target = 'dist';

const host = {
  path: target + '/',
  port: 80
};

// 将图片拷贝到目标目录
gulp.task('copy:images', function(done) {
  gulp.src([origin + '/images/**/*'])
    .pipe(gulp.dest(target + '/images'))
    .on('end', done);
});

// 替换html中被压缩合并的文件
gulp.task('usemin', function() {
  var htmlminConfig = {
    collapseWhitespace: true,
    processScripts: ['text/html'],
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: false,
    minifyCSS: false
  };
});

// 压缩合并css, css中既有自己写的.less, 也有引入第三方库的.css
gulp.task('lessmin', function(done) {
  gulp.src(['src/css/main.less', 'src/css/*.css'])
    .pipe(less())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(target + '/css/'))
    .on('end', done);
});

//将js加上8位md5,并修改html中的引用路径，该动作依赖build-js
gulp.task('md5:js', ['build-js'], function(done) {
  gulp.src(target + '/js/*.js')
    .pipe(md5(8, target + '/*.html'))
    .pipe(gulp.dest(target + '/js'))
    .on('end', done);
});

// 将css加上8位md5，并修改html中的引用路径，该动作依赖sprite
gulp.task('md5:css', ['sprite'], function(done) {
  gulp.src(target + '/css/*.css')
    .pipe(md5(8, target + '/*.html'))
    .pipe(gulp.dest(target + '/css'))
    .on('end', done);
});

gulp.task('sprite', ['copy:images', 'lessmin'], function(done) {
  var timestamp = +new Date();
  gulp.src(target + '/css/style.min.css')
    .pipe(base64())
    .pipe(cssmin())
    .pipe(gulp.dest(target + '/css'))
    .on('end', done);
});

gulp.task('clean', function(done) {
  gulp.src([target + '/*'])
    .pipe(clean())
    .on('end', done);
});

gulp.task('watch', function(done) {
  gulp.watch('src/**/*', ['lessmin', 'build-js'])
    .on('end', done);
});

gulp.task('connect', function() {
  connect.server({
    root: host.path,
    port: host.port,
    livereload: true
  });
});

var myDevConfig = Object.create(webpackConfig);

var devCompiler = webpack(myDevConfig);

// 引用webpack对js进行操作
gulp.task("build-js", function(callback) {
  devCompiler.run(function(err, stats) {
    if (err) throw new gutil.PluginError("webpack:build-js", err);
    gutil.log("[webpack:build-js]", stats.toString({
      colors: true
    }));
    callback();
  });
});

// 发布
gulp.task('default', gulpSequence(['connect', 'md5:css', 'md5:js'], 'usemin'));

// 开发
gulp.task('dev', ['connect', 'copy:images', 'lessmin', 'build-js', 'watch']);