import { Router } from 'express'
import { protection } from "../middleware/auth.middleware.js";
import { createReview } from '../controllers/review.controller.js'

const router=Router();

router.post('/createReview',protection,createReview);

export default router;