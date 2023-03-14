const nodemailer=require('nodemailer');

const transporter =nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"outlook_F307C5F7F504FB81@outlook.com",
        pass:"Lokesh@21022001"
    }
});

const mailOptions ={
    from : "outlook_F307C5F7F504FB81@outlook.com",
    to : 'lokeshdanu9@gmail.com',
    subject : "test" ,
    teat : 'test1'
};

module.exports= function(req,res,next){
    transporter.sendMail(mailOptions, function (err,info){
       if(err){
           console.log(err);
           return ;
       }
       console.log("Sent"+info.response+'from'+req.url);
   })
   next();
}
