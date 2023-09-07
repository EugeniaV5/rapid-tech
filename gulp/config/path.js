// Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
   build: {
      php: `${buildFolder}/`,
      video: `${buildFolder}/video/`,
      pdf: `${buildFolder}/`,
      js: `${buildFolder}/js/`,
      cssStylePlugins: `${buildFolder}/css/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      files: `${buildFolder}/files/`,
      fonts: `${buildFolder}/fonts/`,
   },
   src: {
      php: `${srcFolder}/php/**/*.php`,
      video: `${srcFolder}/video/**/*.*`,
      pdf: `${srcFolder}/pdf/**/*.pdf`,
      js: `${srcFolder}/js/**/*.js`,
      cssStylePlugins: `${srcFolder}/scss/*.css`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
   },
   watch: {
      php: `${srcFolder}/php/**/*.php`,
      video: `${srcFolder}/video/**/*.*`,
      pdf: `${srcFolder}/pdf/**/*.pdf`,
      js: `${srcFolder}/js/**/*.js`,
      cssStylePlugins: `${srcFolder}/scss/*.css`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,png,gif,webp}`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
};
