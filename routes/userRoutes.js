import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
import {
  authUser,
  authUserProfile,
  registerUser,
} from '../controllers/userController.js';

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, authUserProfile);

export default router;
