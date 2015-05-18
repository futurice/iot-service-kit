// include gulp
var gulp = require('gulp');

// include gulp plugins
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

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

// default task
gulp.task('default', ['copy', 'minify-css']);
