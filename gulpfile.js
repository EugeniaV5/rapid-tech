// Основной модуль
import gulp from "gulp";
// импорт  путей
import { path } from "./gulp/config/path.js";
// импорт  общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную

global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins,
};

// Импорт задач

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { cssStylePlugins } from "./gulp/tasks/cssStylePlugins.js";
import { js } from "./gulp/tasks/js.js";
import { php } from "./gulp/tasks/php.js";
import { video } from "./gulp/tasks/video.js";
import { pdf } from "./gulp/tasks/pdf.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSpriteTask } from "./gulp/tasks/svg-sprive.js";
import { zip } from "./gulp/tasks/zip.js";

// Наблюдатель за изменениями в файлах
function watcher() {
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.php, php);
   gulp.watch(path.watch.video, video);
   gulp.watch(path.watch.pdf, pdf);
   gulp.watch(path.watch.images, images);
   gulp.watch(path.watch.cssStylePlugins, cssStylePlugins);
}

// Последовательная обработака шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(
   fonts,
   gulp.parallel(copy, html, scss, js, php, pdf, video, images, cssStylePlugins)
);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const deployZIP = gulp.series(reset, mainTasks, zip);

// Экспорт сценариев
export { svgSpriteTask };
export { deployZIP };

// Выполнение сценария по умолчанию

gulp.task("default", dev);
