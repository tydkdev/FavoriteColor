import gulp from 'gulp';
import {path, tasks} from './const';

gulp.task(tasks.CLIENT_COPY, () => {
  return gulp.src([path.DEV + '**/*',
    '!' + path.DEV + 'bower_components{,/**}'])
    .pipe(gulp.dest(path.DIST));
});
