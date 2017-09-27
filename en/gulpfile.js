
//引入gulp
var gulp = require('gulp');

//引入webserver插件
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  gulp.src('./')
    .pipe(webserver({
  	host:'0.0.0.0',
	port:'80',
	fallback: 'index.html'
    }));
});
