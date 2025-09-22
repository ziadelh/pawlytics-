const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ziadelhussein@gmail.com',
    pass: 'hxvk gedg ahyg guyl'  
  }
});

function sendWelcomeEmail(to, name) {
    const mailOptions = {
    from: '"Pawlytics WebApp" <ziadelhussein@gmail.com>',
    to: to,
    subject: '🐾 Welcome to Pawlytics — Your Pet’s New Best Friend!',
    html: `<p>Hi ${name},<br><br>
            Welcome to <strong>Pawlytics</strong> – your personalized pet health assistant! 🐾<br><br>
            With Pawlytics, you can:<br>
            • Track your pet’s medical history<br>
            • Get smart health recommendations<br>
            • Receive appointment alerts & more!<br><br>
            Dive in and explore your dashboard today.<br><br>
            Best regards,<br>
            <strong>The Pawlytics Team</strong></p>`
    };


  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err.message);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = sendWelcomeEmail;