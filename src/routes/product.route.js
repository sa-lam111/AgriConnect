import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/product.controller.js';
import { protection } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', protection, createProduct);
router.get('/', getProducts);

export default router;
