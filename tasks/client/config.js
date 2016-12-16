import gulp from 'gulp';
import {path, tasks} from './const';
import gulpNgConfig from 'gulp-ng-config';

gulp.task(tasks.CLIENT_BUILD_CONFIG_DIST, () => {
  return gulp.src('configFile.json')
    .pipe(gulpNgConfig('favColor', {
      createModule: false,
      environment: 'production'
    }))
    .pipe(gulp.dest(path.DIST))
});
