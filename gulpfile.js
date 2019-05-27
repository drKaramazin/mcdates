var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var ts = require('gulp-typescript');
var fileSync = require('gulp-file-sync');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function () {
    return gulp.src('src/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});

function syncHtml() {
    fileSync('src/html', 'dist');

    return Promise.resolve();
}

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./dist",
            routes: {
                '/node_modules': './node_modules'
            }
        }
    });

    gulp.watch('src/*', gulp.series(syncHtml, 'build', browserSync.reload));
});

gulp.task('serve', gulp.series(syncHtml, 'build', 'watch'));

gulp.task('default', gulp.series('serve'));
