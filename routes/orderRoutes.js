import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
import { addOrderItems } from '../controllers/orderController.js';

router.post('/', protect, addOrderItems);

export default router;
