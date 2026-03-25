import { Router } from "express";
const router = Router();
let users = [
  { id: 1, name: "Алексей", email: "alex@example.com" },
  { id: 2, name: "Мария", email: "maria@example.com" },
];
// GET /api/users — получить всех пользователей
router.get("/", (req, res) => {
  res.json(users);
});
// GET /api/users/:id — получить одного по ID
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === +req.params.id);
  if (!user) return res.status(404).json({ error: "Не найден" });
  res.json(user);
});
// POST /api/users — создать нового
router.post("/", (req, res) => {
  const { name, email } = req.body;
  const user = { id: Date.now(), name, email };
  users.push(user);
  res.status(201).json(user);
});
export default router;
