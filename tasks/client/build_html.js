import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import rev from 'gulp-rev-append';
import {path, tasks} from './const';

const HTML = [
  path.DIST + '**/*.html',
  '!' + path.DIST + 'bower_components/**/*',
  '!' + path.DIST + 'node_modules/**/*'
];

gulp.task(tasks.CLIENT_BUILD_HTML_DIST, () => {
  return gulp.src(HTML, {base: path.DIST})
    .pipe(rev())
    .pipe(htmlmin({
      collapseWhitespace: true,
      caseSensitive: true
    }))
    .pipe(gulp.dest(path.DIST));
});
