import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
import {
  authUser,
  authUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';

router.post('/', registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, authUserProfile)
  .put(protect, updateUserProfile);

export default router;
