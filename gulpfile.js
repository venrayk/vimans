 //引入gulp
var gulp = require('gulp');

//引入webserver插件
var webserver = require('gulp-webserver'); 

gulp.task('webserver', function(){
gulp.src('./')
.pipe(webserver({
port: 3000,//端口
host: '127.0.0.1',//域名
liveload: true,//实时刷新代码。不用f5刷新
directoryListing: {
path: './index.html',
enable: true
}
}))
});