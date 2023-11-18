import { IsDefined, IsPhoneNumber, MinLength } from "class-validator";

export default class RegisterDto {
  @IsPhoneNumber()
  @IsDefined()
  mobile: string;

  @IsDefined()
  name: string;

  @IsDefined()
  @MinLength(8)
  password: string;
}
