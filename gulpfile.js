var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    babel = require("gulp-babel"),
    concat = require("gulp-concat"),
    server = require('gulp-express');

gulp.task('default',['styl','babel','medias','build'], function () {

    server.run(['server.js']);

    gulp.watch(['./server.js', './controllers/**/*.js', 'routes/**/*.js'], [server.run]);
    gulp.watch(['./views/**/*.jsx'], server.notify);

    gulp.watch(['./public/css/**/*.styl'], function(event){

        gulp.run('styl');
        server.notify(event);
    });

    gulp.watch(['./public/js/**/*.js'], function(event){

        gulp.run('babel');
        server.notify(event);
    });

    gulp.watch(['./public/medias/*'], function(event){
        gulp.src('./public/medias/*')
        .pipe(gulp.dest('./public/build/medias'));
        server.notify(event);
    });
});

gulp.task('medias', function() {
    return gulp.src('./public/medias/*/*')
        .pipe(gulp.dest('./public/build/medias'));
});

gulp.task('styl', function() {
    return gulp.src('./public/css/styles.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./public/build/css'));
});

gulp.task('babel', function () {

    return gulp.src('./public/js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./public/build/js'));
});

gulp.task('build', function () {

    gulp.run('styl');
    gulp.run('babel');
});