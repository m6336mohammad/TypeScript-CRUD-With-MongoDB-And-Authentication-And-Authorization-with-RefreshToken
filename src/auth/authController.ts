import { Router, Request, Response, NextFunction } from "express";
import {changePasswordService, forgotPasswordRequest, login, register, verifyResetCode} from "./authService";
import {LoginDTO, RegisterDTO, ForgotPasswordDTO, ResetCodeDTO, ChangePasswordDTO} from "./auth_dto";
import  validateMiddlerwers  from "../middleware/validationMiddlerwers";
import {codeGeneratorForEmail} from "../utils/codeGeneratorForEmail";
import {sendEmailService} from "../utils/sendEmailService";
import { codeGneratorForOTP } from "../utils/codeGeneratorForOTP";
import { SendOPTService } from "../utils/sendOTPService";
import {generateCaptchaQuestion} from "../utils/generateCaptchaQuestion";
import { emailLoginLogger } from "../helper/emailLoginLogger";

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
        const resetCodeEmail = await codeGeneratorForEmail(user);
        await sendEmailService(user.email,resetCodeEmail,"کد تایید شما my-mqtt.ir")
        const resetCodeOTP = await codeGneratorForOTP(user);
        // SendOPTService(user.mobile,resetCodeOTP) // When the user has mobile in DTO and UserModel
        emailLoginLogger.info(user)
        res.status(200).send({message:"رمز به ایمیل و شماره همراه شما ارسال شد"})

    }catch(err: any){
        next(err);
    }

});

router.post("/verifyResetCode",validateMiddlerwers(ResetCodeDTO),async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user: ResetCodeDTO = req.body;
            const message = await verifyResetCode(user);
            res.status(200).send(message);
        } catch (err: any) {

            next(err);
        }
    }
);

router.post("/changePasswordReq",validateMiddlerwers(ChangePasswordDTO),async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const user: ChangePasswordDTO = req.body;
    const resetCode = await changePasswordService(user);
    if(resetCode.message === "ایمیل صحیح نمی باشد"){
      res.status(404).send(resetCode)
      return
    }
    await sendEmailService(user.email,`کاربر گرامی ${user.email} رمز عبور با موفقیت به روز رسانی شد`,"هشدار امنیتی")
    res.status(200).send(resetCode);
    console.log(resetCode.message)


  } catch (err: any) {
    
    next(err);
  }
}
);

router.get("/captchaReq",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { captcha, result } = generateCaptchaQuestion();
            res.send({captcha:captcha,result:result})

        } catch (err: any) {

            next(err);
        }
    }
);


export default router;
