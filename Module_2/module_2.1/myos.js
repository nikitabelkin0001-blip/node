import os from 'os';

console.log(os.platform()); // darwin, linux, win32
console.log(os.arch()); // x64, arm64
console.log(os.cpus().length); // Количество ядер CPU
console.log(os.totalmem()); // Общая оперативная память (байт)
console.log(os.freemem()); // Свободная память
console.log(os.homedir()); // Домашняя директория пользователя
console.log(os.hostname()); // Имя компьютера