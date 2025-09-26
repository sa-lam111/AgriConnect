import  {getAllFarmers,getFarmerById,getFarmerByEmail} from "../controllers/user.controller.js";
import { addToCart,getCart } from "../controllers/cart.controller.js";
import { Router } from 'express'
import { protection } from "../middleware/auth.middleware.js";
import { user } from "../middleware/validation.middleware.js";
const router= Router();

router.get('/getAllFarmers',protection, getAllFarmers);
router.get('/getFarmerById',protection, getFarmerById);
router.get('/getFarmerByemail',protection, getFarmerByEmail);
router.post('/addToCart',protection,user,addToCart);
router.get('/getCart',protection,user,getCart);
export default router;