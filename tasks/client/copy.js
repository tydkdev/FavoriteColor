import gulp from 'gulp';
import {path, tasks} from './const';

const COPY = [
  path.DEV + '**/*',
  '!' + path.DEV + 'bower_components',
  '!' + path.DEV + 'bower_components/**'
];

gulp.task(tasks.CLIENT_COPY_DIST, () => {
  return gulp.src(COPY, {base: path.DEV})
    .pipe(gulp.dest(path.DIST));
});
