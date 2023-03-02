import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"

export default function sendMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,  
        auth:{
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASSWORD,
        }
        });

        const toHostMailData = {
            from : req.body.email,
            to : "furansisc2035@gmail.com",
            subject : `[お問い合わせ:${req.body.select}] ${req.body.name}様より`,
            text : `${req.body.others} Send from ${req.body.email}`,
            html:`
            <p>[企業名]</p>
            <p>${req.body.company}</p>
            <p>[名前]</p>
            <p>${req.body.name}</p>
            <p>[内容]</p>
            <p>${req.body.select}</p>
            <p>[Email]</p>
            <p>${req.body.email}</p>
            <p>[備考]</p>
            <p>${req.body.others}</p>
            `
        }

        let message
        transporter.sendMail(toHostMailData, (err,info) =>{

            if (err) message="送信失敗"
            else message="送信成功"
        })

        return res.send(message)

}
