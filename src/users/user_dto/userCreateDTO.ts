import { IsDefined, IsEmail, IsPhoneNumber, MinLength} from "class-validator";

class CreateUserDTO {
@IsPhoneNumber()
@IsDefined()
mobile:string

@IsDefined()
name: string;

@IsDefined()
@MinLength(8)
password:string;

@IsDefined()
@IsEmail()
email:string;

@IsDefined()
age:number;
}
export default CreateUserDTO