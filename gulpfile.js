
const {src,dest,series} = require('gulp')
const babel = require('gulp-babel');
const autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano')

function compileCss(){
  var plugins = [
    autoprefixer({overrideBrowserslist:['> 1%','last 2 versions','not ie <= 10']})
    
  ]
  return src(['src/css/*.css'])
  .pipe(postcss(plugins)).pipe(dest('lib/dist/css'))
}

function compileJs(cb){
  cb()
  return src(['src/js/*.js'])
  .pipe(babel({
    presets:['@babel/env']
  })).pipe(dest('lib/dist/js'))
}
exports.default = series(
  compileCss,
  compileJs
)