require('dotenv').config();
const express = require('express');
const multer = require('multer');
const upload = multer(); // default memory storage

const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message,phone, business, activity } = req.body;

  var config = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  };
  // Create transporter using your SMTP credentials
  const transporter = nodemailer.createTransport(config);

  try {

    var body = `
       name: ${name}
       phone: ${phone}
       business: ${business}
       activity/city: ${activity}
       ${message}
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_TO,
      subject: 'New message from contact form',
      text: body,
    });

    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ success: false, error: error.message });
  }
});


app.post('/send-quote', upload.none(), async (req, res) => {
  const { name, email } = req.body;

  var config = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  };
  // Create transporter using your SMTP credentials
  const transporter = nodemailer.createTransport(config);

  try {

    var body = `
       commercialName: ${commercialName}
       name: ${name}
       phone: ${telephone}
       city: ${ville}
    `;


    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_TO,
      subject: 'New Quote request from contact form',
      text: body,

    });

    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ success: false, error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));