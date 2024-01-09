import {ForgotPasswordDTO,ResetCodeDTO,ChangePasswordDTO} from "./auth_dto";
import { LoginDTO, RegisterDTO } from "./auth_dto";
import { encodeTokens , } from "../utils/index";
import ServerError from "../errors/serverError";
import UserModel from "../model/userModel";
import bcrypt from "bcrypt";
import _ from "lodash"

//register service
export const register = async (data: RegisterDTO) => {
  const user = await UserModel.findOne({ email: data.email });
  if (user) {
    throw new ServerError(409, " ایمیل تکراری می باشد");
  } else {
    const hashpassword = await bcrypt.hash(data.password, 10);
    const newUser = await UserModel.create({ ...data, password: hashpassword });
    newUser.save();
    return _.pick(newUser, "email");
  }
};
  
//login service
export const login = async (data: LoginDTO) => {
  //find user by email number

  const user = await UserModel.findOne({ email: data.email });
  if (!user) {
    throw new ServerError(404, "کاربر مورد نظر یافت نشد ");
  }
  const comparePassword = await bcrypt.compare(
    data.password,
    `${user.password}`
  );
  if (!comparePassword) {
    throw new ServerError(401, "موبایل یا رمز عبور اشتباه می باشد");
  }
  //encode user id in database and send to user
  const token = encodeTokens({ id: user._id });
  return { token: token, email: user.email };
};

  
//forget password service
export const forgotPasswordRequest = async(data:ForgotPasswordDTO)=>{
  const flage = true
  //find user by email number
    const user = await UserModel.findOne({ email: data.email });
    if (!user) {
      throw new ServerError(404,"کاربر مورد نظر یافت نشد ");
    }
    user.flage = flage;
    await user.save();
    return flage;
    
  }
  
//veryfiResetCode service
export const veryfiResetCode = async (data: ResetCodeDTO) => {
  //find user by resetCode number
  const user = await UserModel.findOne({ resetCode: data.resetCode });
  if (!user) {
    throw new ServerError(404, "کد نامعتبر می باشد ");
  }

  // Check resetCode and resetTokenExpiration
  if (user.flage == true && user.resetCode && user.resetTokenExpiration) {
  }
const currentTime = Date.now();
if (currentTime > user.resetTokenExpiration){
  user.flage = false
  user.save()
  throw  new ServerError(404, "زمان شما به پایان رسیده است")    
  }
  return ({message:"کد تایید شد"})
};

//changePasswordService service
export const changePasswordService = async (data: ChangePasswordDTO) => {
  //find user by resetCode number
  const user = await UserModel.findOne({ email: data.email });
  if (!user) {
    throw new ServerError(404, "کاربر مورد نظر یافت نشد");
  }
  if(user.flage == true && user.email){

    const hashedPassword = await bcrypt.hash(data.password, 10);
     user.password = hashedPassword 
     user.flage = false
     await user.save();
     return ({message:"رمز عبور با موفقیت به روز رسانی شد"})
  }

 

}
