import { Router, Request, Response, NextFunction } from "express";

import { createNewComponents, deleteComponents, getAllComponents, getOneComponents, updateComponents } from "./compService";
import CreateComponentDTO from "./dto/componentCreateDTO";
import {RequestWithUser} from "../types/requestWithUser";
import UpdateComponentDTO from "./dto/componentsUpdateDTO";
import { authMiddleware, validateMiddlerwers } from "./../middleware";
import GetAllComponentDTO from "./dto/getAllComponentDTO";

const router = Router();

//no requre to authMiddleware becuse all user can be search all product
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try{
      const filtter : any = req.query
      const result =await getAllComponents(filtter)
      res.status(200).json(result)
    }catch(err){
      next(err)
    }
  });