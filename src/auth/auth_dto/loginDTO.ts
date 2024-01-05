import { IsDefined, IsEmail, IsPhoneNumber, MinLength} from "class-validator";

export default class LoginDTO {
  @IsEmail()
  @IsDefined()
  email: string;

  @IsDefined()
  @MinLength(8)
  password: string;
}
