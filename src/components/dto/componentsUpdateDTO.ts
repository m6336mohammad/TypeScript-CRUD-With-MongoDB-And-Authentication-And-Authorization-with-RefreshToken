import { IsDefined, IsEmail, IsOptional, IsPhoneNumber, MinLength} from "class-validator";

class UpdateComponentDTO {
    @IsDefined()
    title:string
  
    @IsDefined()
    description: string;
    
    @IsDefined()
    topic: string;
    
    @IsDefined()
    subscriber: string;

    @IsDefined()
    publisher: string;

    @IsOptional()
    user:string

    @IsOptional()
    broker:string

}
