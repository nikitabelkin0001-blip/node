console.log('Привет, Node.js!');
console.log('Версия Node: ', process.version);
console.log('Платформа: ', process.platform);
console.log('Текущая директория:', process.cwd());
console.log('Аргументы:', process.argv.slice(2));
console.log('Память:', process.memoryUsage().heapUsed, 'байт');