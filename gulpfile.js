const gulp = require('gulp')
const sass = require('gulp-sass')
const srcmap = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const rename = require('gulp-rename')
const minifyCSS = require('gulp-csso')


gulp.task('clean', () => {
  del.sync(['./lib/**/*'])
})

gulp.task('css', () => {
  return gulp.src('./src/index.scss')
    .pipe(rename('layit.css'))
    .pipe(srcmap.init())
      .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['> 0% in CN', 'IE >= 8']
      }))
    .pipe(srcmap.write('./'))
    .pipe(gulp.dest('./lib'))
})

gulp.task('minifyCSS', () => {
  return gulp.src('./lib/layit.css')
    .pipe(minifyCSS({
      restructure: false,
      sourceMap: true
    }))
    .pipe(rename('layit.min.css'))
    .pipe(gulp.dest('./lib'))
})

// dev
gulp.task('dev', () => {
  return gulp.watch('./src/*.scss', ['build'])
})