var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify-es').default;
var gulpIf = require('gulp-if');
var uglifycss = require('gulp-uglifycss');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var deploy = require('gulp-gh-pages');

gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  });
});

gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    })))
    .pipe(gulp.dest('docs'));
});

gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(newer('docs/images'))
  .pipe(imagemin({ optimizationLevel: 5 }))
  .pipe(gulp.dest('docs/images'));
});

gulp.task('videos', function(){
  return gulp.src('src/video/**/*')
  .pipe(newer('docs/video'))
  .pipe(gulp.dest('docs/video'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('docs/fonts'));
});

gulp.task('clean:dist', function() {
  return del.sync('docs');
});

gulp.task('cache:clear', function (callback) {
return cache.clearAll(callback);
});

gulp.task('cname', function() {
  return gulp.src(['src/CNAME'])
    .pipe(gulp.dest('docs'));
})

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'videos', 'fonts', 'cname'],
    callback
  );
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  );
});

gulp.task('deploy', function () {
  return gulp.src("./docs/**/*")
    .pipe(deploy())
});