import {Router} from 'express';
import { userRegister,userLogin,farmerRegister,farmerLogin } from '../controllers/auth.controller.js';

const router=Router();

router.post('/uRegister',userRegister);
router.post('/uLogin',userLogin);
router.post('/fRegister',farmerRegister);
router.post('/fLogin',farmerLogin);


// Farmer routes
router.post('/farmer/register', registerFarmer);
router.post('/farmer/login', loginFarmer);

export default router;