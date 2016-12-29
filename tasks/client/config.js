import gulp from 'gulp';
import {path, tasks} from './const';
import gulpNgConfig from 'gulp-ng-config';

gulp.task(tasks.CLIENT_BUILD_CONFIG_DIST, () => {
  return gulp.src('configFile.json')
    .pipe(gulpNgConfig('favColor', {
      createModule: false,
      environment: 'production-aws'
    }))
    .pipe(gulp.dest(path.DIST))
});

gulp.task(tasks.CLIENT_BUILD_CONFIG_DEV, () => {
  return gulp.src('configFile.json')
    .pipe(gulpNgConfig('favColor', {
      createModule: false,
      environment: 'local'
    }))
    .pipe(gulp.dest(path.DEV))
});
