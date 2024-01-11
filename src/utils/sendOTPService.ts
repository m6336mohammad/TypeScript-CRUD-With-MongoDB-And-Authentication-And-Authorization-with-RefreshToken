import Kavenegar from "kavenegar";

export const SendOPTService = (to: string, message: string) => {

    const api = Kavenegar.KavenegarApi({apikey: 'your api key'});

    api.Send({message: message, sender: "2000500666", receptor: to,},

        function (response, status) {
            console.log(response);
            console.log(status);

        }

    );
};
