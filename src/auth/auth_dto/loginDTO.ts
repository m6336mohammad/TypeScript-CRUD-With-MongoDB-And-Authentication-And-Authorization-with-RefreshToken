import { IsDefined, IsPhoneNumber, MinLength} from "class-validator";

export default class LoginDTO {
  @IsPhoneNumber()
  @IsDefined()
  email: string;

  @IsDefined()
  @MinLength(8)
  password: string;
}
