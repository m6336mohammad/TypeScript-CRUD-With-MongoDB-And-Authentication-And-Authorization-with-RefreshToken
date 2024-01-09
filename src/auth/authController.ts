import { Router, Request, Response, NextFunction } from "express";
import {forgotPasswordRequest, login, register} from "./authService";
import { LoginDTO,RegisterDTO,ForgotPasswordDTO} from "./auth_dto";
import  validateMiddlerwers  from "../middleware/validationMiddlerwers";
import {codeGeneratorForEmail} from "../utils/codeGneratorForEmail";
import {sendEmailService} from "../utils/sendEmailService";

const router = Router()

router.post("/register",validateMiddlerwers(RegisterDTO),async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: RegisterDTO = req.body;
      const newUser = await register(body);
      res.send(newUser);
    } catch (err: any) {
      next(err);
    }
  }
);

router.post("/login",validateMiddlerwers(LoginDTO),async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: LoginDTO = req.body;
      const loginUser = await login(user);
      res.send(loginUser);
    } catch (err: any) {
      next(err);
    }
  }
);

router.post("/forgotPasswordReq",validateMiddlerwers(ForgotPasswordDTO),async (req: Request, res: Response,next:NextFunction )=>{
    try{
        const user:ForgotPasswordDTO = req.body
        await forgotPasswordRequest(user);
        const resetCode = await codeGeneratorForEmail(user);
        await sendEmailService(user.email,resetCode,"کد تایید شما my-mqtt.ir")
        // SendOPTService(user.mobile,resetCode)
        res.status(200).send({message:"رمز به ایمیل شما ارسال شد"})

    }catch(err: any){
        next(err);
    }

});


export default router;
