import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 't67409008@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    });

    const mailData = {
      from: 't67409008@gmail.com',
      to: 'blueyw74@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: `${req.body.message} | Sent from: ${req.body.email}`,
      html: `<div>${req.body.message}</div><p>Company Name: ${req.body.company}</p><p>Sent from: ${req.body.email}</p>`,
    };

    const info = await transporter.sendMail(mailData);
    console.log(info);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
