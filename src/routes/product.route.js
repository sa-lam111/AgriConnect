import { Router } from 'express';
import { createProduct, getProducts,getProductsByFarmerId,editProduct,getProductsForFarmer,deleteProduct } from '../controllers/product.controller.js';
import { protection } from '../middleware/auth.middleware.js';
import {farmer} from '../middleware/validation.middleware.js'
const router = Router();

router.post('/', protection,farmer, createProduct);
router.get('/', getProducts);
router.get('/id', protection,getProductsByFarmerId);
router.put('/',protection,farmer,editProduct);
router.get('/farmer',protection,farmer,getProductsForFarmer);
router.delete('/:productId',protection,farmer,deleteProduct);
export default router;
