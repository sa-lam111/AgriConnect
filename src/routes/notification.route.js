import { Router } from 'express';
import { create, getAll, updateToRead } from '../controllers/notification.controller.js';
import { protection } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', protection, getAll);
router.post('/', protection, create);
router.put('/:notificationId/read', protection, updateToRead);

export default router;
