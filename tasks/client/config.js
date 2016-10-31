import gulp from 'gulp';
var gulpNgConfig = require('gulp-ng-config');

gulp.task('client.test', function () {
  gulp.src('configFile.json')
    .pipe(gulpNgConfig('fav-color.config'))
    .pipe(gulp.dest('.'))
});
