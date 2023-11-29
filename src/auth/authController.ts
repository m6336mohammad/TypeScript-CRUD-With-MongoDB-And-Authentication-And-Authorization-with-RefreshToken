import { Router, Request, Response, NextFunction } from "express";
import {register} from "./authService";
import { LoginDTO,RegisterDTO } from "./auth_dto";
import  validateMiddlerwers  from "../middleware/validationMiddlerwers";

const router = Router()
router.post(
  "/register",
  validateMiddlerwers(RegisterDTO),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: RegisterDTO = req.body;
      const newUser = await register(body);
      res.send(newUser);
    } catch (err: any) {
      next(err);
    }
  }
);