const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();

const mailSender = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      service: process.env.SMTP_SERVICE,
      port: process.env.SMTP_PORT,
      secure: true, // if using TLS, set to true for port 465
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const { email, subject, template, data } = options;

    // Get the path to email template file
    const templatePath = path.join(__dirname, "../mails", template);

    // Render the email template with EJS
    const html = await ejs.renderFile(templatePath, data);

    // Define mail options
    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject,
      html,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error(`Failed to send email: ${error.message}`);
    throw new Error('Email sending failed');
  }
};

module.exports = mailSender;
