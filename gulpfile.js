const { src, dest, parallel } = require('gulp');
const uglify = require('gulp-uglify');

function js() {
    return src(['public/modules/**/*.js', '!public/modules/**/data.js'], { sourcemaps: true })
        // .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('build/modules/', { sourcemaps: false }))
}

exports.default = js;