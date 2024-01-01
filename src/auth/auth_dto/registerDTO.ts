import { IsDefined, IsEmail, MinLength, ValidationArguments, ValidationOptions, registerDecorator} from "class-validator";

export default class RegisterDTO {
  @IsEmail()
  @IsDefined()
  email:string

  @IsDefined()
  name: string;

  @IsDefined()
  @MinLength(8)
  password:string;

  @IsDefined()
  @MinLength(8)
  // @IsEqualTo('password', {
  //   message: 'Password confirmation does not match with password',
  // })
  confirmPassword:string;


}
