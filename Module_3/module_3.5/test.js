import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises"; //Для соединения потоков
import { createGzip } from "zlib"; //Для сжатия
// Чтение файла потоком
const readStream = createReadStream("large-file.log", "utf-8");
readStream.on("data", (chunk) => {
  console.log("Получена порция:", chunk.length, "символов");
});
readStream.on("end", () => {
  console.log("Чтение завершено");
});
readStream.on("error", (err) => {
  console.error("Ошибка:", err.message);
});

// Копирование большого файла потоком
const src = createReadStream("video.mp4");
const dest = createWriteStream("copy.mp4");
await pipeline(src, dest);
console.log("Файл скопирован");

// Сжатие файла (gzip)
await pipeline(
  createReadStream("access.log"), // Читаем
  createGzip(), // Сжимаем
  createWriteStream("access.log.gz") // Записываем
);
console.log("Файл сжат");
