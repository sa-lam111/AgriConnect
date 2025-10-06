import {Router} from 'express';
import { userRegister,userLogin,farmerRegister,farmerLogin } from '../controllers/auth.controller.js';
import {user,farmer} from '../middleware/validation.middleware.js'
const router=Router();

router.post('/uRegister',userRegister);
router.post('/uLogin',userLogin);
router.post('/fRegister',farmerRegister);
router.post('/fLogin',farmerLogin);


export default router;