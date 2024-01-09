import crypto from "crypto";
import userModel from "../model/userModel";
import {ForgotPasswordDTO} from "../auth/auth_dto";
import {codeGeneratorForEmail} from "./codeGeneratorForEmail";
import UserModel from "../model/userModel";

//function to generate a unique token
const generateCode =()=>{
    return crypto.randomBytes(3).toString('hex'); //6 digits
};

//function to set user reset token and its expiration
export const codeGneratorForOTP =async (data:ForgotPasswordDTO)=>{
const code =generateCode();
const user =await UserModel.findOne({ email:data.email});





}
