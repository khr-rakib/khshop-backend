import express from 'express';
const router = express.Router();
import { protect, admin } from '../middlewares/authMiddleware.js';
import {
  authUser,
  authUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';

router.post('/', registerUser);
router.get('/', protect, admin, getUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, authUserProfile)
  .put(protect, updateUserProfile);
router.delete('/:id', protect, admin, deleteUser);
router.get('/:id', protect, admin, getUserById);
router.put('/:id', protect, admin, updateUser);

export default router;
