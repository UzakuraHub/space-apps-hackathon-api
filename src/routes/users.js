import { Router } from "express";
import {User} from '../controllers';
import {Auth, Image} from '../middlewares'

const router = Router();

router.patch('/profile', Auth.protect, Image.handleUpload, User.updateProfile)
router.post('/register', Image.handleUpload, User.register)
router.post('/login', User.login)

export default router;