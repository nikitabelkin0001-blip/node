import { createServer } from "http";
import { readFile } from "fs/promises";
import { join, extname } from "path";
// Таблица MIME-типов
const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};
const server = createServer(async (req, res) => {
  // Определяем путь к файлу
  let filePath = join("public", req.url === "/" ? "index.html" : req.url);
  const ext = extname(filePath);
  const contentType = MIME[ext] || "application/octet-stream";
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404 — Файл не найден</h1>");
  }
});
server.listen(3000);
