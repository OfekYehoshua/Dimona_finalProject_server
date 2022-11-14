const express = require("express")
const router = express.Router()
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serSid = process.env.TWILIO_SER_SID;
const client = require('twilio')(accountSid, authToken);  

// client.messages 
// .create({body: 'Hi there', from: '+18312152510', to: '+972535213420'})
// .then(message => console.log(message.sid));


router.get('/login', (req,res) => {
    if (req.query.phonenumber) {
       client
       .verify
       .services(serSid)
       .verifications
       .create({
           to: `+${req.query.phonenumber}`,
           channel:'sms' 
       })
       .then(data => {
           res.status(200).send({
               message: "Verification is sent!!",
               phonenumber: req.query.phonenumber,
               data
           })
       }) 
    } else {
       res.status(400).send({
           message: "Wrong phone number :(",
           phonenumber: req.query.phonenumber,
           data
       })
    }
})

router.get('/verify', (req, res, err) => {
    
    if (req.query.phonenumber && (req.query.code).length === 6) {
        client
            .verify
            .services(serSid)
            .verificationChecks
            .create({
                to: `+${req.query.phonenumber}`,
                code: req.query.code
            })
            .then(data => {
                if (data.status === "approved") {
                    res.status(200).send({
                        message: "User is Verified!!",
                        data
                    }) 
                }else{
                    console.log(err);
                    res.status(404).send({message:"code wrong!"})
                }
            }).catch((err)=>{
                console.log(err);
                res.status(404).send({message:"code is wrong!"})
            })
    } else {
        res.status(400)
        throw new Error(`Wrong phone number or code at ${req.query.phonenumber} `)
    }
})

module.exports = router