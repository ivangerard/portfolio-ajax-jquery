var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync"),
    webpack = require("webpack-stream");
gulp.task("sass", function() {
        return gulp.src("./resource/assets/sass/**/*.scss")
            .pipe(sass({
            }))
            .pipe(autoprefixer())
            .pipe(gulp.dest("./public/assets/css"))
    })
    //wepack digabung dengan gulp
gulp.task("script", function() {
    return gulp.src("./resource/assets/js/app.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./public/assets/js"))
})
gulp.task("serve", function() {
    browserSync.init({
        server: {
            baseDir: "./public" // server nnya !
        }
    })
    gulp.watch("./resource/assets/sass/**/*.scss", ['sass']);
    //gulp.watch("./index.html")
    gulp.watch("./resource/assets/js/**/*.js", ['script']);
    gulp.watch("./public/assets/css/**/*.css").on("change", browserSync.reload) //stiap ada perubahan reload
    gulp.watch("./public/assets/js/app.js").on("change", browserSync.reload)
    gulp.watch("./public/*.html").on("change", browserSync.reload)

})
