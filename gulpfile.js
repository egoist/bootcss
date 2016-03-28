const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const nano = require('gulp-cssnano')
const rename = require('gulp-rename')
const serve = require('gulp-serve')

gulp.task('serve', serve({
  root: ['./'],
  port: 3030
}))

gulp.task('build', function () {
  return gulp.src('src/bootcss.css')
    .pipe(postcss([
			require('postcss-import')(),
			require('postcss-cssnext')()
		]))
    .pipe(gulp.dest('dist/'))
})

gulp.task('compress', ['build'], function () {
  return gulp.src('./dist/bootcss.css')
		.pipe(rename('bootcss.min.css'))
		.pipe(sourcemaps.init())
    .pipe(nano())
		.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['build'])
})

gulp.task('default', ['serve', 'build', 'watch'])
