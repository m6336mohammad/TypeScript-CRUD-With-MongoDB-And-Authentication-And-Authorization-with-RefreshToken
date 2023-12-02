import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils";
import { RequestWithUser } from "../types/requestWithUser";
const authMiddleware = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {};

export default authMiddleware;
