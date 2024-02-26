// Храним информацию об общих плагинах которые будут использоваться в различных сценариях

import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browsersync from "browser-sync"; // Local Server
import newer from "gulp-newer";

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
}