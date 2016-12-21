import gulp from 'gulp';
import {path, tasks} from './const';

const JS = [
  path.DEV + '**/*',
  '!' + path.DEV + 'bower_components',
  '!' + path.DEV + 'bower_components/**'
];

gulp.task(tasks.CLIENT_COPY_DIST, () => {
  return gulp.src(JS, {base: path.DEV})
    .pipe(gulp.dest(path.DIST));
});
