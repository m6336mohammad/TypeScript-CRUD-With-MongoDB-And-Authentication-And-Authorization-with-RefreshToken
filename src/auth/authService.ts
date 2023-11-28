import UserModel from "../model/userModel";
import { LoginDTO, RegisterDTO } from "./auth_dto";
import bcrypt from "bcrypt";
import { encodeToken , decodeToken } from "../utils";
import _ from "lodash"
import ServerError from "../errors/serverError";

export const register = async (data: RegisterDTO) => {
    const user = await UserModel.findOne({ mobile: data.mobile });
    if (user) {
        throw new ServerError(409,"The mobile number is duplicated");
    } else {
      const hashpassword = await bcrypt.hash(data.password, 10);
      const newUser = await UserModel.create({ ...data, password: hashpassword });
      newUser.save();
      return _.pick(newUser, "mobile","password");
    }
  };
  
  export const login = async (data: LoginDTO) => {
    //find user by mobile number
   
      const user = await UserModel.findOne({ mobile: data.mobile });
      if (!user) {
        throw new ServerError(404," not fond user");
      }
      const comparePassword = await bcrypt.compare(
        data.password,
        `${user.password}`
      );
      if (!comparePassword) {
        throw new ServerError(401,"phone number or password invalid");
      }
      //encode user id in database and send to user
      const token = encodeToken({ id: user._id });
      return { token: token };
    
  };
  