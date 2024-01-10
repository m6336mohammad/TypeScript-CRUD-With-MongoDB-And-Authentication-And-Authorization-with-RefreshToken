import { CaptchaRequestDTO } from "../auth/auth_dto/captchaRequestDTO";

type Operation = '+' | '-' | '*';



export const generateCaptchaQuestion = (): CaptchaRequestDTO => {
    const num1: number = Math.floor(Math.random() * 10);
    const num2: number = Math.floor(Math.random() * 10);
    const operation: Operation = ['+', '-', '*'][Math.floor(Math.random() * 3)] as Operation;
    const result: number = eval(`${num1} ${operation} ${num2}`);
    const captcha: string = `${num1} ${operation} ${num2} = ?`;

    return { captcha, result };
}
