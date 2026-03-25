// import express from "express";
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//   res.json({ message: "Главная страница" });
// });
// app.get("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.json({ message: `Запрошен пользователь с ID: ${userId}` });
// });
// app.post("/users", (req, res) => {
//   const { name, email } = req.body;
//   res.status(201).json({ message: "Пользователь создан", name, email });
// });
// // Middleware для парсинга JSON в теле запроса
// app.use(express.json());
// // Определяем маршрут
// app.get("/", (req, res) => {
//   res.json({ message: "Привет, Express!" });
// });
// // Запускаем сервер
// app.listen(PORT, () => {
//   console.log(`Сервер: http://localhost:${PORT}`);
// });
// let users = [
//   { id: 1, name: "Алексей", email: "alex@example.com" },
//   { id: 2, name: "Мария", email: "maria@example.com" },
// ];
// // GET — получить всех пользователей
// app.get("/api/users", (req, res) => {
//   res.json(users);
// });
// // GET — получить одного по ID (параметр :id)
// app.get("/api/users/:id", (req, res) => {
//   const user = users.find((u) => u.id === +req.params.id);
//   if (!user) return res.status(404).json({ error: "Не найден" });
//   res.json(user);
// });
// // POST — создать нового
// app.post("/api/userss", (req, res) => {
//   const { name, email } = req.body;
//   const user = { id: Date.now(), name, email };
//   users.push(user);
//   res.status(201).json(user); // 201 = Created
// });
// // PATCH — частичное обновление
// app.patch("/api/users/:id", (req, res) => {
//   const user = users.find((u) => u.id === +req.params.id);
//   if (!user) return res.status(404).json({ error: "Не найден" });
//   Object.assign(user, req.body); // Обновляем только переданные поля
//   res.json(user);
// });
// // DELETE — удалить
// app.delete("/api/users/:id", (req, res) => {
//   const index = users.findIndex((u) => u.id === +req.params.id);
//   if (index === -1) return res.status(404).json({ error: "Не найден" });
//   users.splice(index, 1);
//   res.status(204).end(); // 204 = No Content
// });
// // GET /api/products?category=phones&sort=price&page=2
// app.get("/ap2i/products", (req, res) => {
//   const { category, sort, page = 1, limit = 10 } = req.query;
//   // page и limit имеют значения по умолчанию
//   // Все значения — строки! Преобразуйте в числа при необходимости
//   res.json({ products: [], page: +page, limit: +limit });
// });
// app.get("/api/products", (req, res) => {
//   const {
//     category,
//     sort = "name",
//     order = "asc",
//     page = "1",
//     limit = "10",
//   } = req.query;
//   // Преобразуем строки в числа
//   const pageNum = Math.max(1, +page);
//   const limitNum = Math.max(1, Math.min(100, +limit));
//   res.json({
//     filters: { category, sort, order },
//     pagination: { page: pageNum, limit: limitNum },
//     products: [], // здесь будут данные из БД
//   });
// });

// // Применить ко ВСЕМ роутам
// app.use(express.json()); // Парсинг JSON-тела
// app.use(express.urlencoded({ extended: true })); // Парсинг HTML-форм
// app.use(express.static("public")); // Статические файлы

// const myMiddleware = (req, res, next) => {
//   // req — объект запроса
//   // res — объект ответа
//   // next — функция, которая передаёт управление следующему
//   middleware;
//   next();
// };

// const logger = (req, res, next) => {
//   const start = Date.now();
//   console.log(`--> ${req.method} ${req.url}`);
//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     console.log(`<-- ${req.method} ${req.url} ${res.statusCode}
// ${duration}ms`);
//   });
//   next();
// };
// app.use(logger);

// const auth = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(401).json({ error: "Требуется авторизация" });
//   }
//   // В реальном приложении здесь проверяется JWT-токен
//   next();
// };
// app.get("/api/profile", auth, (req, res) => {
//   res.json({ user: "Информация о пользователе" });
// });

import express from "express";
import usersRouter from "./routes/users.js";
import productsRouter from "./routes/products.js";
const app = express();
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.listen(3000, () => {
  console.log("Сервер: http://localhost:3000");
});

app.get("/api/users/:id", (req, res, next) => {
  try {
    const user = users.find((u) => u.id === +req.params.id);
    if (!user) {
      throw new ApiError(404, "Пользователь не найден");
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Маршрут не найден" });
});

const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`);
  console.error(err.stack);
  const status = err.status || 500;
  const message = err.status ? err.message : "Внутренняя ошибка сервера";
  res.status(status).json({ error: message });
};

app.use(errorHandler);
