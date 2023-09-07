export const pdf = () => {
   return app.gulp
      .src(app.path.src.pdf, { sourcemaps: true })
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: "PDF",
               message: "Error: <%= error.message %>",
            })
         )
      )
      .pipe(app.gulp.dest(app.path.build.pdf))
      .pipe(app.plugins.browsersync.stream());
};
