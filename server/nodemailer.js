const nodemailer=require('nodemailer');

const transporter =nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"outlook_F307C5F7F504FB81@outlook.com",
        pass:"Lokesh@21022001"
    }
})