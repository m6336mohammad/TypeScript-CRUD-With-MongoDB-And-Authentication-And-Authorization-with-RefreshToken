import { Router, Request, Response } from "express";
import { authMiddleware, validateMiddlerwers } from "./../middleware";
import { getAllUsers, getUserByID } from "./userService";

const router = Router();

router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    res.send(getAllUsers());
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});


//get by id
router.get("/id", authMiddleware, async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await getUserByID(userId);
    res.status(200).json({data: user, message:"ok"});
  } catch (err: any) {
    res.status(500).json({data:null, message: err.message });
  }
});
export default router