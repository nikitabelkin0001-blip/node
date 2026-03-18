import { writeFile, appendFile, readFile } from 'fs/promises';
console.log('1) Создаём notes.txt');
await writeFile('notes.txt', 'Первая версия текста\n', 'utf-8');
console.log(await readFile('notes.txt', 'utf-8'));
console.log('2) Перезаписываем notes.txt');
await writeFile('notes.txt', 'Вторая версия (старая удалена)\n', 'utf8');
console.log(await readFile('notes.txt', 'utf-8'));
console.log('3) Дописываем в конец файла');
await appendFile('notes.txt', 'Третья строка добавлена через appendFile\n', 'utf-8');
console.log(await readFile('notes.txt', 'utf-8'));
console.log('4) Записываем JSON-отчёт');
const report = { savedAt: new Date().toISOString(), status: 'ok',
lines: 2 };
await writeFile('report.json', JSON.stringify(report, null, 2), 'utf8');
console.log('5) Пытаемся создать новый файл только если его ещё нет');
try {
 await writeFile('unique.txt', 'Создан один раз\n', { encoding:
'utf-8', flag: 'wx' });
 console.log('unique.txt создан');
} catch (err) {
 if (err.code === 'EEXIST') {
 console.log('unique.txt уже существует, файл не перезаписан');
 } else {
 console.error('Ошибка записи:', err.message);
 }
}