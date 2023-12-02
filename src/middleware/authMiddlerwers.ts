import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils";
import { RequestWithUser } from "../types/requestWithUser";
const authMiddleware = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {let token = req.headers.authorization;
  if (!token){
    return
    res.status(401).json({ message: "plese login"});
  }
  token = token.split(" ")[1];
  
};



export default authMiddleware;