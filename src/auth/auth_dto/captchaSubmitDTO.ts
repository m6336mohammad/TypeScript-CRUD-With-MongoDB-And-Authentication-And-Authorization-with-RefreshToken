import { IsDefined,} from "class-validator";

export default class CaptchaSubmitDTO {
    @IsDefined({message: 'جواب ارسال نشد'})
    answer: number

    @IsDefined({message: 'نتیجه ارسال نشد'})
    result: number;
}
