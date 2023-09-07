export const video = () => {
   return app.gulp
      .src(app.path.src.video, { sourcemaps: true })
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: "Video",
               message: "Error: <%= error.message %>",
            })
         )
      )
      .pipe(app.gulp.dest(app.path.build.video))
      .pipe(app.plugins.browsersync.stream());
};
