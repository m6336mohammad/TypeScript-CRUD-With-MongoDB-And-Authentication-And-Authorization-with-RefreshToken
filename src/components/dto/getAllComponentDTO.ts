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
    
    @IsOptional()
    publisher: string;
    
    @IsOptional()
    broker:string
  
    @IsOptional()
    page:number
  
    @IsOptional()
    page_size:number
  
}
export default GetAllComponentDTO