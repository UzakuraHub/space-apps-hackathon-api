import { Router } from "express";
import {Dashboard} from '../controllers';
import {Auth} from '../middlewares'

const router = Router();

router.get('/', Auth.protect, Dashboard.init)

export default router;
