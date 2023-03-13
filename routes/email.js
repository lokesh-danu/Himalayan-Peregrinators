const router =require('express').Router();
// const nodemailer= require('../components/nodemailer');
const nodemailer=require('nodemailer');
const transporter =nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"nodemailer.daemon@gmail.com",
        pass:"Lokesh@21022001"
    }
});
router.post('/',async(req,res)=>{
    console.log(req.body);
    const mailOptions ={
        from : "outlook_F307C5F7F504FB81@outlook.com",
        to : req.body.email,
        subject : req.body.subject ,
        text:req.body.des
    };
    transporter.sendMail(mailOptions, function (err,info){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        else{
            console.log("Sent"+info.response+'from'+req.url);
            res.status(200).send(`success`);
        }        
    });
    
})

module.exports=router;