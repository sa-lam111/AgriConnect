import  {getAllFarmers,getFarmerById,getFarmerByEmail} from "../controllers/user.controller.js";
import { Router } from 'express'
import { protection } from "../middleware/auth.middleware.js";

const router= Router();

router.get('/getAllFarmers',protection, getAllFarmers);
router.get('/getFarmerById',protection, getFarmerById);
router.get('/getFarmerByemail',protection, getFarmerByEmail);
export default router;