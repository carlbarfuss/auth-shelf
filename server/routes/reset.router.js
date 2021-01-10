const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const key = process.env.RESET_PASSWORD_KEY;
const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'carlbarfuss@gmail.com',
      pass: 'aussiebum' // naturally, replace both with your real credentials or an application-specific password
   }
});





forgotPassword = (req, res) => {
   console.log('in forgotPassword');
   const email = req.body.email;
   const token = jwt.sign({email: email}, key, {expiresIn: '20m'})
   const mailOptions = {
      from: 'carlbarfuss@gmail.com',
      to: email,
      subject: 'password reset',
      text: `
         <h2>Please click on the given link to reset your password</h2>
         <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>`
   };
   transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
         console.log(error);
         res.sendStatus(500)
      } else {
         console.log('Email sent: ' + info.response);
         return res.json({message: 'Email has been sent, please reset your account'})
      }
   });
}

// handles password reset request
router.put('/', forgotPassword)


module.exports = router;
