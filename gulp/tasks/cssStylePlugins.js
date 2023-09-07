import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';

export const cssStylePlugins = () => {
	return app.gulp.src(app.path.src.cssStylePlugins, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "CSS",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(cleanCss())
		.pipe(rename({
			extname: ".min.css"
		}))
		.pipe(app.gulp.dest(app.path.build.cssStylePlugins))
		.pipe(app.plugins.browsersync.stream());
}