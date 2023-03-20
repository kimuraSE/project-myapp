import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

const sendGmail = (req:NextApiRequest,res:NextApiResponse)=>{

    const transport = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        auth :{
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASSWORD
        },
    });

    const toHostMailDate = {
        from : req.body.email,
        to : "kimuraforbusiness@gmail.com",
        subject : `【お問い合わせ】${req.body.name}様より`,
        Text : `send from ${req.body.email}`,
        html: `
        <p>[お問い合わせ内容]</p>
        <p>${req.body.select}</p>
        <p>[お名前]</p>
        <p>${req.body.name}</p>
        <p>[会社名]</p>
        <p>${req.body.company}</p>
        <p>[メールアドレス]</p>
        <p>${req.body.email}</p>
        <p>[詳細]</p>
        <p>${req.body.others}</p>
        `
    };

    transport.sendMail(toHostMailDate,function(err:any,info:any){
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    })
    return res.send("送信完了")
}

export default sendGmail