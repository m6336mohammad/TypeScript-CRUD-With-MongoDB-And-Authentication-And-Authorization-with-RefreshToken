import { IsOptional,} from "class-validator";
class GetAllComponentDTO{

    @IsOptional()
    title:string
  
    @IsOptional()
    description: string;
    
    @IsOptional()
    topic: string;
    
    @IsOptional()
    subscriber: string;
  
}