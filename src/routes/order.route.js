import { Router } from 'express';
import { createOrder, getOrders } from '../controllers/order.controller.js';
import { protection } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', protection, createOrder);
router.get('/', protection, getOrders);

export default router;
