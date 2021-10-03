import { Router } from "express";
import {User} from '../controllers';
import {Auth} from '../middlewares'

const router = Router();

router.patch('/profile', Auth.protect, User.updateProfile)
router.post('/register', User.register)
router.post('/login', User.login)

export default router;