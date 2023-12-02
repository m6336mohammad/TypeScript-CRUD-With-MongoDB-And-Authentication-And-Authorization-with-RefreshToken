import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils";
import { RequestWithUser } from "../types/requestWithUser";
const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "please login" });
  }
  token = token.split(" ")[1];
  try {
    const data: any = decodeToken(token);
    req.user = data.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "please login" });
  }
};

export default authMiddleware;
