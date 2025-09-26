import { Router } from "express";
import { getWeather } from "../controllers/weather.controller.js";
import { protection } from "../middleware/auth.middleware.js";
const router=Router();

router.post('/',protection,getWeather);

export default router;