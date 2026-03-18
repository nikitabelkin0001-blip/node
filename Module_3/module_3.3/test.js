import { writeFile, appendFile } from 'fs/promises';
// Записать текст (перезаписывает файл целиком)
await writeFile('output.txt', 'Привет, мир!\n', 'utf-8');
// Записать JSON с форматированием
const config = { port: 3000, host: 'localhost', debug: true };
await writeFile(
 'config.json',
 JSON.stringify(config, null, 2) // null, 2 — отступ 2 пробела
);
await appendFile('log.txt', `[${new Date().toISOString()}] Сервер
запущен\n`);


import { copyFile, rename, unlink } from 'fs/promises';
await copyFile('source.txt', 'copy.txt'); // Копирование
await rename('old.txt', 'new.txt'); // Переименование /
перемещение
await unlink('temp.txt'); // Удаление файла