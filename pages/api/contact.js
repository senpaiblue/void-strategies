
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (data) => {
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
    console.log(transporter)
    const mailData = {
      from: 't67409008@gmail.com',
      to: 'anshuman9998@gmail.com',
      subject: `Message From ${data.name}`,
      text: `${data.message} | Sent from: ${data.email}`,
      html: `<div>${data.message}</div><p>Company Name: ${data.company}</p><p>Sent from: ${data.email}</p>`,
    };

    const info = await transporter.sendMail(mailData);
    console.log(info);

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const result = await sendEmail(req.body);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
