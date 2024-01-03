import { IsDefined, IsPhoneNumber} from "class-validator";

export default class ForgotPasswordDTO {
    @IsPhoneNumber()
    @IsDefined()
    email: string;
}
