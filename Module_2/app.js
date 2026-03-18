import { readFile } from 'node:fs/promises'; // Промис-версия fs
import { join, resolve } from 'node:path'; // Работа с путями
import { createServer } from 'node:http'; // HTTP-сервер

// import Loger from './logger';
// const log = new Loger;
// log.log('Сервер запущен.');

import { add, multiply, PI } from './math.js';
// import { add as сложить, multiply as умножить } from './math.js';    С использованием переименования (alias)
// import * as math from './math.js';   импорт модуля как обычног оъекта.
console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(PI);

// import Calculator from '../Calculator.js'; Иморт
// import Calculator, { helperFunction } from './Calculator.js'; // Комбинированный импорт
// async function loadModule(type) {
//     if (type === 'math') {
//         const math = await import('./math.js');
//         console.log(math.add(2, 3)); // 5
//     } else {
//         const utils = await import('./utils.js');
//         utils.doSomething();
//     }
// }

import { config } from './config.js';
console.log(config.port);


// Операция Синтаксис
// Именованный экспорт : export function add() {} или export { add, PI }
// Дефолтный экспорт : export default class Calculator {}
// Именованный импорт : import { add, PI } from './math.js'
// Дефолтный импорт : import Calculator from './Calculator.js'
// Импорт всего : import * as math from './math.js'
// Импорт с alias : import { add as sum } from './math.js'
// Динамический импорт : const mod = await import('./math.js')
// Встроенный модуль : import { readFile } from 'node:fs/promises'


