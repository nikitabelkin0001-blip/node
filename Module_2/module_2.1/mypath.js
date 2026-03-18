import path from 'node:path';
// path.join() — соединяет части пути
console.log(path.join('/users', 'alex', 'docs', 'file.txt'));
// /users/alex/docs/file.txt
// path.resolve() — возвращает абсолютный путь
console.log(path.resolve('src', 'index.js'));
// /home/alex/project/src/index.js
// path.extname() — расширение файла
console.log(path.extname('photo.jpg')); // .jpg
// path.basename() — имя файла
console.log(path.basename('/a/b/c.txt')); // c.txt
// path.dirname() — директория файла
console.log(path.dirname('/a/b/c.txt')); // /a/b