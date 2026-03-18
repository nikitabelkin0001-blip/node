import { writeFileSync } from 'fs';
console.log('start sync write');
setTimeout(() => console.log('timer fired (sync write)'), 0);
writeFileSync('sync.txt', 'SYNC DATA\n', 'utf-8');
console.log('end sync write');