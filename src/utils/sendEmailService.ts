import nodemailer from 'nodemailer';

export const sendEmailService = async (to:string, message:string,sub:string) =>{
    const  transporter =  nodemailer.createTransport({
        service: 'gmail',
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth: {
            user: '', //google gmail
            pass: '' //app passwors from google.com
        }
    });


    }