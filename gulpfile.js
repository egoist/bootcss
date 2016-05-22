const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const nano = require('gulp-cssnano')
const rename = require('gulp-rename')
const serve = require('gulp-serve')
const nunjucks = require('gulp-nunjucks')
const pkg = require('./package')

const browsers = [
  'ie > 8', 'last 2 versions'
]

const plugins = [
  require('postcss-import')(),
  require('postcss-simple-vars'),
  require('postcss-cssnext')({
    browsers,
    features: {
      rem: false
    }
  })
]

gulp.task('serve', serve({
  root: ['./public'],
  hostname: '127.0.0.1',
  port: 3030
}))

gulp.task('html', function () {
  return gulp.src('site/*.html')
    .pipe(nunjucks.compile({
      pkg,
      time: Date.now(),
      title: 'BootCSS',
      navs: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Layout',
          path: '/layout.html'
        },
        {
          name: 'Components',
          path: '/components.html'
        },
      ]
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('site:css', function () {
  return gulp.src('site/site.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('public'))
})

gulp.task('css', function () {
  return gulp.src('src/bootcss.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('public'))
})

gulp.task('compress', ['css'], function () {
  return gulp.src('./dist/bootcss.css')
    .pipe(rename('bootcss.min.css'))
    .pipe(sourcemaps.init())
    .pipe(nano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function () {
  gulp.watch('./src/**/*.css', ['compress'])
  gulp.watch('./site/**/*.html', ['html'])
  gulp.watch('./site/**/*.css', ['site:css'])
})

gulp.task('build', ['compress', 'html', 'site:css'])

gulp.task('default', ['serve', 'build', 'watch'])
