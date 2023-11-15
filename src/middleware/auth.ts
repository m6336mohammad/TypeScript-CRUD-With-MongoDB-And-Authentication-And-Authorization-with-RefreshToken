import { Request, Response, NextFunction } from "express";
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.user && req.body.user === "admin") {
    next()
  } else {
    res.status(401).send('unAuthorize')
  }
};

export default authMiddleware
