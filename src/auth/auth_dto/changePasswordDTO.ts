import { IsDefined, IsEmail, MinLength,} from "class-validator";
import { IsEqualTo } from "./registerDTO";

export  class ChangePasswordDTO {
  @IsEmail()
  @IsDefined({message: 'وارد کردن ایمیل اجباری می باشد'})
  email:string
  
  @IsDefined()
  @MinLength(8,{message: 'رمز عبور باید بیشتر از 8 کاراکتر باشد'})
  password:string;

  @IsDefined()
  @MinLength(8)
  @IsEqualTo('password', {message: 'رمز عبور با تکرار رمز عبور یکسان نیست',})
  confirmPassword:string;
}
