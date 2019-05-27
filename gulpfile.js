var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var ts = require('gulp-typescript');
var fileSync = require('gulp-file-sync');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('build-ts', function () {
    return gulp.src('src/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});

gulp.task('sync-html', function (cb) {
    fileSync('src/html', 'dist');
    cb();
});

gulp.task('reload-browser', function (cb) {
    browserSync.reload();
    cb();
});

gulp.task('build', gulp.parallel('sync-html', 'build-ts'));

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./dist",
            routes: {
                '/node_modules': './node_modules'
            }
        }
    });

    gulp.watch('src/**/*', gulp.series('build', 'reload-browser'));
});

gulp.task('serve', gulp.series('build', 'watch'));

gulp.task('default', gulp.series('build'));
