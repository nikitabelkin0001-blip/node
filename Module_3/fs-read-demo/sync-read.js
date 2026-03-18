import { readFile } from 'fs/promises';
console.log('start async');
setTimeout(() => console.log('timer fired (async)'), 0);
try {
 const content = await readFile('big.txt', 'utf-8');
 console.log('async length:', content.length);
 console.log('end async');
} catch (err) {
 console.error('read error:', err.message);
}