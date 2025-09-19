import nodemailer from 'nodemailer';
import { config } from 'dotenv';
config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendWelcomeEmail = async (to, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Welcome to AgriConnect!',
    text: `Hi ${name},

Welcome to AgriConnect! We are excited to have you on board.

Best regards,
The AgriConnect Team`,
  };

  try {
    console.log('Sending welcome email to:', to);
    console.log('Mail options:', mailOptions);
    const info = await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully.');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
};