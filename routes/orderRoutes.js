import express from 'express';
const router = express.Router();
import { admin, protect } from '../middlewares/authMiddleware.js';
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDeliver,
  updateOrderToPaid,
} from '../controllers/orderController.js';

router.post('/', protect, addOrderItems);
router.get('/', protect, admin, getOrders);
router.get('/myorders', protect, getMyOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/deliver', protect, admin, updateOrderToDeliver);

export default router;
