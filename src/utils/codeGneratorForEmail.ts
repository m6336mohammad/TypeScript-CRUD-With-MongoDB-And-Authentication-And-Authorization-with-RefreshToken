import crypto from 'crypto';
import UserModel from '../model/userModel'
import ForgotPasswordDTO from '../auth/auth_dto/forgotPasswordsDTO';


// Function to generate a unique token
const generateCode = () => {
    return crypto.randomBytes(3).toString('hex');// 6 ragam
};

// Function to set user reset token and its expiration
export const codeGeneratorForEmail = async (data:ForgotPasswordDTO) => {
    const code = generateCode();
    const user = await UserModel.findOne({ email:data.email });

    if (!user) {
        throw new Error('User not found');
    }

};
