const nodeMalter = require('nodemailer')
const { contactModel } = require('../../controller/contact')
require('dotenv').config()
const contactForm = (data) => {
  const { name, email, phone, company, message } = data
  return `
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            p {
              margin-bottom: 20px;
            }
            h3 {
              margin-top: 30px;
              margin-bottom: 10px;
            }
            ul {
              margin: 0;
              padding: 0;
              list-style: none;
            }
            li {
              margin-bottom: 5px;
            }
            strong {
              margin-right: 5px;
            }
          </style>
        </head>
        <body>
          <h3>New Contact Form Submission</h3>
          <p>Here are the details of the new Contact form submission:</p>
          <ul>
            <li><strong>Full Name:</strong> ${name}</li>
            <li><strong>Email : </strong> ${email}</li>
            <li><strong>Phone : </strong> ${phone}</li>
            <li><strong>Company : </strong> ${company}</li>
            <li><strong>Message : </strong> ${message}</li>
          </ul>
        </body>
      </html>
      `
}
const careersForm = (data) => {
  const { First_Name, Last_Name, Phone_Number, Opportunity, about_us, email } = data
  const submitData = new contactModel({
    First_Name, Last_Name, Phone_Number, Opportunity, about_us, email
  })
  submitData.save().then(res => {

  }).catch(error => {

  })
  return `
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            p {
              margin-bottom: 20px;
            }
            h3 {
              margin-top: 30px;
              margin-bottom: 10px;
            }
            ul {
              margin: 0;
              padding: 0;
              list-style: none;
            }
            li {
              margin-bottom: 5px;
            }
            strong {
              margin-right: 5px;
            }
          </style>
        </head>
        <body>
          <h3>New Careers Form Submission</h3>
          <p>Here are the details of the new Careers form submission:</p>
          <ul>
            <li><strong>Name:</strong> ${First_Name}  ${Last_Name} </li>
            <li><strong>Phone Number : </strong> ${Phone_Number}</li>
            <li><strong>Opportunity : </strong> ${Opportunity}</li>
            <li><strong>How did you hear about us? : </strong> ${about_us}</li>
          </ul>
        </body>
      </html>
      `
}

function contact(req, res) {
  try {
    const transporter = nodeMalter.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      },
      port: 465,
      host: 'smtp.gmail.com'
    })
    const data = req.body
    const mainOption = {
      from: process.env.EMAIL,
      to: req.body.type === 'contact' ? process.env.RE_EMAIL : process.env.EMAIL,
      subject: req?.body?.subject,
      html: req.body.type === 'contact' ? contactForm(data) : careersForm(data)
    }

    transporter.sendMail(mainOption, (error, info) => {
      if (error) {
        res.status(405).json({
          massage: "email sending failed",
          status: false
        })
      } else {
        res.status(200).json({
          massage: "email sending success",
          status: true
        })
      }
    })

  } catch (error) {
    res.status(405).json({
      massage: error?.message,
      status: false
    })
  }
}

module.exports = contact  