var gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  babel = require("gulp-babel"),
  rename = require("gulp-rename"),
  cleanCSS = require("gulp-clean-css"),
  autoprefixer = require("gulp-autoprefixer");

gulp.task("jscompress", function() {
  return gulp
    .src("./js/index.js")
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest("./js"));
});
gulp.task("csscompress", function() {
  return gulp
    .src("./style/style.css")
    .pipe(rename({ suffix: ".min" }))
    .pipe(autoprefixer({ browsers: ["last 3 versions"], cascade: false }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./style"));
});
gulp.task("auto", function() {
  gulp.watch("js/index.js", ["jscompress"]);
  gulp.watch("style/style.css", ["csscompress"]);
});
