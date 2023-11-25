import { Router, Request, Response } from "express";
import { authMiddleware, validateMiddlerwers } from "./../middleware";
import { deleteUserById, getAllUsers, getUserByID, updateUserById } from "./userService";
// import { update } from "lodash";

const router = Router();

router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    res.send(getAllUsers());
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});


//get by id
router.get("/:id", authMiddleware, async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await getUserByID(userId);
    res.status(200).json({data: user, message:"ok"});
  } catch (err: any) {
    res.status(500).json({data:null, message: err.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await deleteUserById(userId);
    return res.status(200).json({ data: user, message: "ok" });
  } catch (err: any) {
    return res.status(500).json({ data: null, message: err.message });
  }
});

router.put("/:id", async(req:Request , res:Response)=>{
  try {
    const body = req.body;
    const userId = req.params.id;
    const user = await updateUserById(userId, body);
    return res.status(200).json({dtat: user, message:"ok"});
    
  }catch (err: any){
    return res.status(500).json({ data: null, message:err.message});
  }
})
export default router