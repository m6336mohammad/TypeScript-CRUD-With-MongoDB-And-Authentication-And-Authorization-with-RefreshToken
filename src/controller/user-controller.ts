import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) :void=> {
    try {
        res.json({data:"you get all user"});
      } catch (err: any) {
        res.status(500).json({ message: err.message });
      }
  };
