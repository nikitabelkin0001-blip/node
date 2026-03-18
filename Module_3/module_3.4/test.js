import { mkdir, readdir, rm, stat } from 'fs/promises';
import { existsSync } from 'fs';
// Создать директорию (recursive создаёт вложенные)
await mkdir('uploads', { recursive: true });
await mkdir('data/logs/2025', { recursive: true });
// Проверить существование файла или директории
if (existsSync('config.json')) {
 console.log('Файл существует');
}
// Список файлов в директории
const files = await readdir('src');
console.log(files); // ['index.js', 'utils.js', ...]
// С информацией о типе (файл или директория)
const entries = await readdir('src', { withFileTypes: true });
for (const entry of entries) {
 const type = entry.isDirectory() ? 'DIR' : 'FILE';
 console.log(`${type}: ${entry.name}`);
}
const info = await stat('package.json');
console.log('Размер:', info.size, 'байт');
console.log('Создан:', info.birthtime);
console.log('Изменён:', info.mtime);
console.log('Это директория:', info.isDirectory());
console.log('Это файл:', info.isFile());
// Удалить директорию со всем содержимым
await rm('temp', { recursive: true, force: true });