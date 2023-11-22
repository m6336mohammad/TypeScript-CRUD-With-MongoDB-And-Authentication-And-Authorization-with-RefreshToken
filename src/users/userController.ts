import { Router, Request, Response } from "express";
import { authMiddleware, validateMiddlerwers } from "./../middleware";
import { getAllUsers } from "./userService";

const router = Router();

router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    res.send(getAllUsers());
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router