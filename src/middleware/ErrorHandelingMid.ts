import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import ServerError from "../errors/serverError";
// import logger from "../helper/logger";
const erroHandellerMiddleware = (error: ErrorRequestHandler,req:Request,res:Response,next:NextFunction) => {
    if(error instanceof ServerError){
    res.status(error.status).send({message: error.message})
    }else{
        // logger.error(error)
        res.status(500).send("internal server error")
    }
};
export default erroHandellerMiddleware