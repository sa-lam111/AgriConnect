import { Router } from "express";
import { getWeather } from "../controllers/weather.controller.js";
import { protection } from "../middleware/auth.middleware.js";
import { farmer } from "../middleware/validation.middleware.js";
const router=Router();

router.post('/',protection,farmer,getWeather);

export default router;