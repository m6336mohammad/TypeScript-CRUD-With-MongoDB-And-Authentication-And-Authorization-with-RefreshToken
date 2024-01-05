import { IsDefined, IsEmail, IsPhoneNumber} from "class-validator";

export default class ForgotPasswordDTO {
    @IsEmail()
    @IsDefined()
    email: string;
}
