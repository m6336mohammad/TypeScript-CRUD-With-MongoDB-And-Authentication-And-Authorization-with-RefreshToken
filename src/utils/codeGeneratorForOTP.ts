import crypto from "crypto";
import userModel from "../model/userModel";
import {ForgotPasswordDTO} from "../auth/auth_dto";

//function to generate a unique token
const generateCode =()=>{
    return crypto.randomBytes(3).toString('hex'); //6 digits
};
