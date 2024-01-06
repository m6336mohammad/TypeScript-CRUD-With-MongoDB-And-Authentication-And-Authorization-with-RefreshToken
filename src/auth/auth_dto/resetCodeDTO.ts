import { IsDefined, } from "class-validator";

export default class ResetCodeDTO {

    @IsDefined()
    resetCode:String;  
  }
  