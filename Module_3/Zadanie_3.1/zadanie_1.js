import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises"; //Для соединения потоков
import { createGzip } from "zlib"; //Для сжатия
import { mkdir, readdir, rm, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { writeFile, appendFile } from 'fs/promises';
