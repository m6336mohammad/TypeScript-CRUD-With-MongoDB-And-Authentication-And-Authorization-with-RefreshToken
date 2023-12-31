import { Router, Request, Response } from "express";
import { authMiddleware, validateMiddlerwers } from "./../middleware";
import { creatNewUser, deleteUserById, getAllUsers, getUserByID, updateUserById } from "./userService";
import UserDTO from "./user_dto/userDTO";
import CreateUserDTO from "./user_dto/userCreateDTO";
// import { update } from "lodash";

const router = Router();

router.get("/",  async (req: Request, res: Response) => {
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

router.delete("/:id",authMiddleware ,async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await deleteUserById(userId);
    return res.status(200).json({ data: user, message: "ok" });
  } catch (err: any) {
    return res.status(500).json({ data: null, message: err.message });
  }
});

router.post(
  "/",authMiddleware,
  validateMiddlerwers(CreateUserDTO),
  async (req: Request, res: Response) => {
    try {
      const boy: UserDTO = req.body;
      const newUser = await creatNewUser(boy);
      return res.status(200).json({ data: newUser, message: "ok" });
    } catch (err: any) {
      return res.status(500).json({ data: null, message: err.message });
    }
  }
);


router.put("/:id",authMiddleware, async(req:Request , res:Response)=>{
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