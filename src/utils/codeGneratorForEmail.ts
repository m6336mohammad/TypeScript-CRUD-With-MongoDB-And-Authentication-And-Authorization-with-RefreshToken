import crypto from 'crypto';
import UserModel from '../model/userModel'
import ForgotPasswordDTO from '../auth/auth_dto/forgotPasswordsDTO';


// Function to generate a unique token
const generateCode = () => {
    return crypto.randomBytes(3).toString('hex');// 6 ragam
};

