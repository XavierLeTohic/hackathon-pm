var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp),
    gls = require('gulp-live-server'),
    stylus = require('gulp-stylus'),
    babel = require("gulp-babel"),
    concat = require("gulp-concat"),
    chalk = require('chalk'),
    del = require('del');

// Set NODE_ENV to 'development'
gulp.task('env:dev', function () {

  if(process.env.NODE_ENV !== 'development') {

    process.env.NODE_ENV = 'development';
    console.log(chalk.cyan('Environment was set to : development'));
  }
});

// Set NODE_ENV to 'production'
gulp.task('env:prod', function () {

  if(process.env.NODE_ENV !== 'production') {

    process.env.NODE_ENV = 'production';
    console.log(chalk.cyan('Environment : production'));
  }
});

gulp.task('serve', function () {

  runSequence('env:dev', 'build', function() {

    var server = gls.new('server.js');
    server.start();

    gulp.watch(['./server.js', './controllers/**/*.js', 'routes/**/*.js'], function(file) {

      server.start.bind(server)();

      setTimeout(function() {

        server.notify.apply(server, [file]);
      }, 500);
    });

    gulp.watch(['./views/**/*.jsx', './views/**/*.js'], function(file) {

      server.notify.apply(server, [file]);
    });

    gulp.watch(['./public/css/**/*.styl'], function(file) {

      gulp.run('styl', function() {

        server.notify.apply(server, [file]);
      });
    });

    gulp.watch(['./public/js/**/*.js'], function(file) {

      gulp.run('babel', function() {

        server.notify.apply(server, [file]);
      });
    });

    gulp.watch(['./public/medias/*'], function(file) {

      gulp.src('./public/medias/*')
        .pipe(gulp.dest('./public/build/medias'))
        .done(function() {

          server.notify.apply(server, [file]);
        });
    });

  });

});

gulp.task('medias', function(done) {

  gulp.src('./public/medias/**/*')
      .pipe(gulp.dest('./public/build/medias'))
      .on('end', done);
});

gulp.task('styl', function(done) {

  gulp.src('./public/css/styles.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./public/build/css'))
      .on('end', done);
});

gulp.task('babel', function (done) {

  gulp.src('./public/js/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('./public/build/js'))
      .on('end', done);
});

gulp.task('build', function(done) {

  runSequence('build:clean', 'styl', 'babel', 'medias', done);
});

gulp.task('build:clean', function(done) {

  del('./public/build').then(function() {
    done();
  });
});

gulp.task('default', ['serve']);