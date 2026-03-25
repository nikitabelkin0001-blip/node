import { Router } from 'express';
const router = Router();
let products = [{ id: 1, name: 'Телефон', price: 500 }];
router.get('/', (req, res) => res.json(products));
export default router;