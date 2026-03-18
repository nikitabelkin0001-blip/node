const date = Date();
console.log(date);
console.log('Платформа: ', process.platform);
console.log('Версия Node: ', process.version);
console.log('Аргументы: ', process.argv.slice(2));
console.log('Использование памяти: ', process.memoryUsage().heapUsed, 'Байт');
