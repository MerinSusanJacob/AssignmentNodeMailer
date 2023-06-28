const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'merincherian2022@gmail.com',
      pass: process.env.PASSWORD
    }
  });

const mailOptions = {
    from: 'merincherian2022@gmail.com',
    to: 'jethin.cherian@gmail.com',
    subject: 'Greetings!!! Message through Nodemailer',
    text: 'Hello Jethin!! Hope you are doing well! I am sending this email through a package called nodemailer. Check it out.'
  };

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error.message);
    } else {
      console.log('Email sent successfully!');
    }
  });
  
    