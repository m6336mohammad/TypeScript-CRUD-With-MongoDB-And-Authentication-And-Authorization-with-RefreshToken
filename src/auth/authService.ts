import UserModel from "../model/userModel";
import { LoginDTO, RegisterDTO } from "./auth_dto";
import bcrypt from "bcrypt";
import { encodeTokens , decodeAccessToken,decodeRefreshToken } from "../utils/index";
import _ from "lodash"
import ServerError from "../errors/serverError";
import ForgotPasswordDTO from "./auth_dto/forgotPasswordsDTO";

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

  
  //forget password servize
export const forgotPasswordRequest = async(data:ForgotPasswordDTO)=>{
  //find user by email number
    const user = await UserModel.findOne({ email: data.email });
    if (!user) {
      throw new ServerError(404,"کاربر مورد نظر یافت نشد ");
    }
    
  }
  