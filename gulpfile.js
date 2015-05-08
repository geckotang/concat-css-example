//npm modules
var gulp = require('gulp');
var concat = require('gulp-concat');


//結合順序を気にしないで結合する場合の指定
var srcCSS = 'css/src/**/*.css';
//結合順序を気にしないで結合したCSSファイル名
var concatCSSName = 'style.css';
//結合順序を指定して結合したCSSファイル名
var concatSortedCSSName = 'sorted_style.css';
var concatSortedCSSName2 = 'sorted2_style.css';
//結合順序を気にして結合する場合の指定
var srcSortedCSS = [
  'css/src/common/_base.css',
  'css/src/common/_util.css',
  'css/src/_header.css',
  'css/src/_footer.css',
  'css/src/_other.css'
];
//結合順序を気にして結合する場合の指定（その2）
var srcSortedCSS2 = [
  'css/src/common/_base.css',
  'css/src/common/_util.css',
  'css/src/something/*.css',
  'css/src/_header.css',
  'css/src/_footer.css',
  'css/src/_other.css'
];
//結合したCSSを配置する場所
var concatCSSDir = 'css/';

 
//結合順序を気にしないで結合するタスク
gulp.task('concat:allCSS', function () {
  return gulp.src(srcCSS)
    .pipe(concat(concatCSSName))
    .pipe(gulp.dest(concatCSSDir));
});

//結合順序を指定して結合するタスク
gulp.task('concat:sortedCSS', function () {
  return gulp.src(srcSortedCSS)
    .pipe(concat(concatSortedCSSName))
    .pipe(gulp.dest(concatCSSDir));
});

//結合順序を指定して結合するタスク（その２）
gulp.task('concat:sortedCSS2', function () {
  return gulp.src(srcSortedCSS2)
    .pipe(concat(concatSortedCSSName2))
    .pipe(gulp.dest(concatCSSDir));
});


gulp.task('default', ['concat:allCSS']);
