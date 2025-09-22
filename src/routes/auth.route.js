import {Router} from 'express';
import { register, login, registerFarmer, loginFarmer } from '../controllers/auth.controller.js';

const router = Router();

// User routes
router.post('/register', register);
router.post('/login', login);

// Farmer routes
router.post('/farmer/register', registerFarmer);
router.post('/farmer/login', loginFarmer);

export default router;