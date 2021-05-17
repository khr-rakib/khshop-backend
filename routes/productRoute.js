import express from 'express';
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getTopProducts,
  createProductReview,
} from '../controllers/productController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

router.get('/', getProducts);
router.get('/top', getTopProducts);
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProduct);
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.post('/:id/reviews', protect, createProductReview);

export default router;
