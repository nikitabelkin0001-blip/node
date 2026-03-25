import { Router } from "express";
const router = Router();
// Middleware только для маршрутов этого роутера
router.use((req, res, next) => {
  if (!req.headers["x-admin-key"]) {
    return res.status(403).json({ error: "Доступ запрещён" });
  }
  next();
});
router.get("/stats", (req, res) => res.json({ users: 100 }));
export default router;
