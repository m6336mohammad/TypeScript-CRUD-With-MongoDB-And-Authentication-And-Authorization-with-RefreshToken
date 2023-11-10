import express, { Router } from 'express';
import homeController from '../controller/home-controller'
const router:Router = express.Router();

router.get('/', homeController.getHomeController)

export default router;