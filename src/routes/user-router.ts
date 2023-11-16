import { Router } from "express";
import { getAllUsers } from "../controller/user-controller";
import authMiddleware from "../middleware/auth";

const router = Router();

router.get("/",authMiddleware, getAllUsers);

export default router