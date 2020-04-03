const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false }))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'leonor.jacobs48@ethereal.email',
            pass: 'Mp8yz65EDFbwmFeMXf'
        }
    });

      let mailOptions = {
          from: 'contact@mrzeepoetry.com',
          to: 'jeffzelaya3@gmail.com',
          replyTo: 'contact@mrzeepoetry.com',
          subject: 'New Message',
          text: req.body.message,
          html: htmlEmail
      }

     transporter.sendMail(mailOptions, (err, info) => {
         if (err) {
             return console.log(err)
         }

         console.log('Message sent: %s', info.message)
         console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
     }) 

  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})