import { Router, Request, Response, NextFunction } from "express";

import { createNewComponents, deleteComponents, getAllComponents, getOneComponent, updateComponents } from "./compService";
import CreateComponentDTO from "./dto/componentCreateDTO";
import {RequestWithUser} from "../types/requestWithUser";
import UpdateComponentDTO from "./dto/componentsUpdateDTO";
import { authMiddleware, validateMiddlerwers } from "./../middleware";

const router = Router();

//no requre to authMiddleware becuse all user can be search all product
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try{
      const filter : any = req.query
      const result =await getAllComponents(filter)
      res.status(200).json(result)
    }catch(err){
      next(err)
    }
  });

router.get("/:id", async(req: Request, res: Response, next: NextFunction) => {
    try{
        const id : string = req.params.id
        const result = await getOneComponent(id)
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
});

//required authMiddleware 
router.post("/",validateMiddlerwers(CreateComponentDTO), authMiddleware, async(req: RequestWithUser, res: Response, next: NextFunction) => {
  try{
    
    const body: CreateComponentDTO= req.body
    const result = await createNewComponents({...body , user : req.user})
    res.status(200).json(result)
  }catch(err){
    next(err)
  }

});

router.put("/:id",authMiddleware,async (req:RequestWithUser,res:Response,next:NextFunction)=>{
    try{
        const body: UpdateComponentDTO = req.body
        const id:string = req.params.id
        const result = await updateComponents(id,{...body,user : req.user})
        res.status(200).json(result)}
    catch(err) { next(err) }
});

//user requre to authMiddleware
router.delete("/:id", authMiddleware, async(req: RequestWithUser, res: Response, next: NextFunction) => {
  try{
    const id: string = req.params.id
    const result = await deleteComponents(id,req.user)
    res.status(200).json(result)
  }catch(err){
    next(err)
  }

});

export default router;