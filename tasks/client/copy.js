import gulp from 'gulp';
import {path, tasks} from './const';

gulp.task(tasks.CLIENT_COPY_DIST, () => {
  return gulp.src(path.DEV + '**/*')
    .pipe(gulp.dest(path.DIST));
});
