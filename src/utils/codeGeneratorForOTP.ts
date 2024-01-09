import crypto from "crypto";
import {ForgotPasswordDTO} from "../auth/auth_dto";
import UserModel from "../model/userModel";

//function to generate a unique token
const generateCode = () => {
    return crypto.randomBytes(3).toString('hex'); //6 digits
};

//function to set user reset token and its expiration
export const codeGneratorForOTP = async (data: ForgotPasswordDTO) => {
    const code = generateCode();
    const user = await UserModel.findOne({email: data.email});

    if (!user) {
        throw new Error('User not found')
    }

    user.resetCode = code;
    user.resetTokenExpiration = Date.now() + 5 * 60 * 1000; //5 minutes

    await user.save();
    return code;

}
