const {
    src,
    dest,
    watch
} = require('gulp');

const compileSass = require('gulp-sass')(require('sass'));

compileSass.compiler = require('node-sass');


const bundleSass = () => {
    return src('src/scss/*.scss')

        .pipe(compileSass().once('error', compileSass.logError))
        .pipe(dest('src/css/'));
};

const devWatch = () => {
    watch('src/scss/*.scss', bundleSass);
};


exports.bundleSass = bundleSass;
exports.devWatch = devWatch;