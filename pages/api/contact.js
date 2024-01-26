export default function (req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 't67409008@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 't67409008@gmail.com',
    to: 'blueyw74@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Company Name: ${req.body.company}</p><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}