import { readFile } from 'node:fs/promises';
const raw = await readFile('./config.json', 'utf-8');
export const config = JSON.parse(raw);
