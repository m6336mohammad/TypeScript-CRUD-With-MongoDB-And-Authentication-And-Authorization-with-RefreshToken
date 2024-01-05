import { NextFunction, Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import ClientErros from "../errors/clientError";
const validateMiddlerwers = (validaionSchema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    // const errors = {};
    const clientErros = new ClientErros
    const validaionClass = plainToInstance(validaionSchema, body);

    validate(validaionClass, {}).then((error) => {
      
      if (error.length > 0) {
        clientErros.data = []
        clientErros.errors = error.map((errors:any)=>{
            return {[errors.property]:Object.values(errors.constraints)}
        });
        res.status(400).json(clientErros);
        console.log(clientErros.errors)
      } else {
        next();
      }
    });
  };
};
export default validateMiddlerwers;
