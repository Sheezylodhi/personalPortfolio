import nodemailer from 'nodemailer';

export async function sendEmail(data) {
  // 1. Transporter setup (Gmail example)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Tumhari email
      pass: process.env.EMAIL_PASS, // App Password (Google settings se generate karo)
    },
  });

  // 2. Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'muhammadshahzaiblodhi@gmail.com', 
    subject: `New Project Inquiry: ${data.name}`,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      
      Message:
      ${data.message}
    `,
  };


  return await transporter.sendMail(mailOptions);
}