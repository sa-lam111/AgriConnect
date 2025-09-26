import { Router } from 'express'
import { protection } from "../middleware/auth.middleware.js";
import { createReview,getReviewsByProductId } from '../controllers/review.controller.js'
import { farmer } from '../middleware/validation.middleware.js';
const router=Router();

router.post('/createReview',protection,createReview);
router.get('/getById',protection,farmer,getReviewsByProductId);

export default router;