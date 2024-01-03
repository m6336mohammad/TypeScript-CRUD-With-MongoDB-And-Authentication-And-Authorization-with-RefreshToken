import { IsDefined, IsPhoneNumber} from "class-validator";

export default class LoginDTO {
    @IsPhoneNumber()
    @IsDefined()
    email: string;
}
