/* globals require */

'use strict';

var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlReplace = require('gulp-html-replace');
var stringReplace = require('gulp-string-replace');
var cleanCSS = require('gulp-clean-css');
var inlineimg = require('gulp-js-base64-inject');
var cssBase64 = require('gulp-css-base64');
var del = require('del');
var rename = require('gulp-rename');
var gulpUtil = require('gulp-util');
var through = require('through2');

var debug = require('gulp-debug');

var PACKAGE = require("./package.json");
var ENTRY_POINT = path.resolve(__dirname, (PACKAGE.main && PACKAGE.main.match(/\.html?$/)) ? PACKAGE.main : "index.html");

var TITLE = "Playable ad";
var SOURCES = [];

var SRC_ROOT = "src/game";
var JS_ROOT = SRC_ROOT + "/js";

function fetchSources() {
    return through.obj(
        function(file, enc, callback) {
            if (file.isNull()) callback(null, file);

            var entryRoot = path.dirname(ENTRY_POINT);
            var jsRoot = path.resolve(__dirname, JS_ROOT);
            var content = String(file.contents);
            var reg = new RegExp('<script.*src="(.+)".*></script>', 'ig');
            var m;
            do {
                m = reg.exec(content);
                if (m) {
                    var src = m[1];
                    src = path.resolve(entryRoot, src);
                    src = path.relative(jsRoot, src);
                    if (src.substr(0, 1) == ".") continue;
                    if (path.basename(src) == "mraid.js") continue;
                    if (src == "config.js") continue;
                    SOURCES.push(src);
                    console.log("Source:", src);
                }
            } while (m);
            callback();
        }
    );
}

function importImages() {
    return through.obj(
        function(file, enc, callback) {
            if (file.isNull()) callback(null, file);
            var reg = new RegExp('[\'"](game\/img\/[^\'"]+)[\'"]', 'ig');
            var content = String(file.contents).replace(reg, "\"data:\" + '@@import src/$1'");
            file.contents = new Buffer(content);
            this.push(file);
            callback();
        }
    );
}

//----------------------------------------------------------------------------------------------------------------------
gulp.task('fetch-sources', [], function () {
    return gulp.src(ENTRY_POINT).pipe(fetchSources());
});

gulp.task('image-base64', [], function () {
    return gulp.src([JS_ROOT + '/**/*.js'])
        .pipe(importImages())
        .pipe(inlineimg())
        .pipe(gulp.dest('temp/base64-js'));
});

gulp.task('compress-body-js', ['image-base64'], function () {
    return gulp.src('temp/base64-js/**/*.js')
        .pipe(uglify().on('error', gulpUtil.log))
        .pipe(gulp.dest('./temp/js/body'));
});

gulp.task('concat-body-js', ['fetch-sources', 'compress-body-js'], function () {
    var sources = SOURCES.map(function(src){
        return "temp/js/body/" + src;
    });
    var tasks = gulp.src(sources)
        .pipe(concat('body.js'))
        .pipe(gulp.dest('temp/js'));

    return merge(tasks);
});

gulp.task('base64-css', [], function () {
    return gulp.src('src/game/css/*.css')
        .pipe(cssBase64({
            maxWeightResource: 1024*1024,
            extensionsAllowed: ['.png', '.jpg', '.ttf', '.woff', '.eot', '.svg']
        }))
        .pipe(gulp.dest('temp/base64-css'));
});

gulp.task('compress-css', ['base64-css'], function () {
    return gulp.src('temp/base64-css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat("style.css"))
        .pipe(gulp.dest('temp/css'));
});

gulp.task('replace-assets', ['concat-body-js'], function () {
    var fullSourceTasks = gulp.src(ENTRY_POINT)
        .pipe(htmlReplace({
            'body-js': {
                src: gulp.src('temp/js/body.js'),
                tpl: '<script type="text/javascript">%s</script>'
            },
            'playable-css': {
                src: gulp.src('temp/css/*.css'),
                tpl: '<style type="text/css">%s</style>'
            },
            'playable-config': {
                src: gulp.src(JS_ROOT + '/config.js'),
                tpl: '<script type="text/javascript">%s</script>'
            },
            'playable-title': {
                src: TITLE,
                tpl: '%s'
            }
        }))
        .pipe(rename('playable-full-source.html'))
        .pipe(gulp.dest('temp/'));

    var cssLink = 'style.css';
    var jsLink = 'game.js';
    var configLink = 'config.js';

    var linkTasks = gulp.src(ENTRY_POINT)
        .pipe(htmlReplace({
            'body-js': {
                src: jsLink,
                tpl: '<script type="text/javascript" src="%s"></script>'
            },
            'playable-css': {
                src: cssLink,
                tpl: '<link type="text/css" rel="stylesheet" href="%s">'
            },
            'playable-config': {
                src: configLink,
                tpl: '<script type="text/javascript" src="%s"></script>'
            },
            'playable-title': {
                src: TITLE,
                tpl: '%s'
            }
        }))
        .pipe(rename('playable-links.html'))
        .pipe(gulp.dest('temp/'));

    return merge([fullSourceTasks, linkTasks]);
});

gulp.task('cleanup-old-digest', ['replace-assets'], function () {
    return del([
        'dist/**/*'
    ]);
});

gulp.task('release', ['cleanup-old-digest'], function () {
    var htmlTask = gulp.src('temp/playable-links.html')
        .pipe(rename('index.html'))
        .pipe(stringReplace(/\s{2,}/g, ''))
        .pipe(stringReplace(/(\r\n|\n|\r)/gm, ''))
        .pipe(gulp.dest('dist'));

    var jsTask = gulp.src('temp/js/body.js')
        .pipe(rename('game.js'))
        .pipe(gulp.dest('dist'));

    var configTask = gulp.src(JS_ROOT + '/config.js')
        .pipe(gulp.dest('dist'));

    var cssTask = gulp.src('temp/css/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'));
    return merge([htmlTask, jsTask, cssTask, configTask]);
});

gulp.task('release-full-source', ['cleanup-old-digest'], function () {
    var tasks = gulp.src('temp/playable-full-source.html')
        .pipe(rename('index-standalone.html'))
        .pipe(gulp.dest('dist'));
    return merge(tasks);
});

// Delete temp folder
gulp.task('cleanup-unused-files', ['release-full-source'], function () {
    var size = ~~fs.statSync(path.resolve('dist/index.html')).size;
    return del([
        'temp'
    ]);
});

gulp.task('default', [
    'fetch-sources',
    'image-base64',
    'compress-body-js',
    'concat-body-js',
    'base64-css',
    'compress-css',
    'replace-assets',
    'cleanup-old-digest',
    'release',
    'release-full-source',
    'cleanup-unused-files'
]);
