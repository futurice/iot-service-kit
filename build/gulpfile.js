// include gulp
var gulp = require('gulp');

// include gulp plugins
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    connect = require('gulp-connect');

// compile sass to css
gulp.task('sass', function() {
    return gulp.src([
            '../src/scss/*.scss',
            '!../src/scss/_constants.scss'
        ])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});

// concatenate and minify css
gulp.task('minify-css', ['sass'], function() {
    gulp.src([
        'css/general.css'
    ])
    .pipe(concat('iot-service-kit-all.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('../secret/css'));
});

// copy assets
gulp.task('copy', function() {
    gulp.src([
        '../src/*.html'
    ])
    .pipe(gulp.dest('../secret'));
    gulp.src([
        '../images/**'
    ])
    .pipe(gulp.dest('../secret/images'));
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch('../images/**', ['copy']);
    gulp.watch('../src/*.html', ['copy']);
    gulp.watch('../src/scss/*.scss', ['minify-css']);
});

// start a server and watch for changes
gulp.task('server', ['copy', 'minify-css', 'watch'], function() {
    connect.server({
        port: 4002,
        root: ['../secret'],
        livereload: true
    });
});

// default task
gulp.task('default', ['server']);
