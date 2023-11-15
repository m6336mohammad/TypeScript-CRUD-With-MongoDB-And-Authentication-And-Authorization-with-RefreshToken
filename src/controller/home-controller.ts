import { Request, Response } from 'express';

const getHomeController = (req: Request, res: Response): void => {
  res.send("Hello, welcome to our website");

};
export default {getHomeController};