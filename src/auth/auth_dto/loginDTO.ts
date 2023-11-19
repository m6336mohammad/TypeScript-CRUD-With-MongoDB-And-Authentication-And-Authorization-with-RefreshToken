import { IsDefined, IsPhoneNumber, MinLength} from "class-validator";

export default class LoginDTO {
  @IsPhoneNumber()
  @IsDefined()
  mobile:string

  @IsDefined()
  @MinLength(8)
  password:string;

}
