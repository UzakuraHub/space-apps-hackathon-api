import { Router } from "express";
import userRoutes from './users';
import dashboardRoutes from './dashboard';

const router = Router();

router.use('/users', userRoutes)
router.use('/dashboard', dashboardRoutes)

export default router;