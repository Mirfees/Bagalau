// Файл для путей

// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); //Получаем название папки

const buildFolder = `./dist`; //Путь к папке с результатом, так же можно использоваться rootFolder в качестве названия
const srcFolder = `./src`; //Путь к папке с исходниками


// Общий объект path к различны путям папки
export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
    }, //объект путей к папке с результатом
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,mp4,ico,mp3}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/*.js`,
        files: `${srcFolder}/files/**/*.*`,
    }, //объект путей с исходным файлом
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp,mp3}`,
        files: `${srcFolder}/files/**/*.*`,
    }, //пути к файлам и папкам за которыми gulp следит, и выполняет определенные действия
    clean: buildFolder,
    buildFolder: buildFolder, //папка с результатом
    srcFolder: srcFolder, //папка с исходниками
    rootFolder: rootFolder, //название папки
    ftp: '', //папка для удаленного сервера
}