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
    const mailOptions = {
        from: '', //gmail account
        to: to,
        subject: sub,
        text: message,
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            return info.response
        }
    });

}